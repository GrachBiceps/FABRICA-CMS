const { response } = require('express')
const { Result } = require('express-validator')
const Ingridient = require('./models/Ingridient')
const OrderInList = require("./models/OrderInList")

async function addIngredient(req){
    const {name, realAmount, amountUnit, lastUpdate, whoUpdated:[ {updateUsername,updateDate,updateAction} ], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req
        await Ingridient.findOneAndUpdate({name},{$push: {whoUpdated:[{updateUsername, updateDate, updateAction}], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}]} }, { safe: true, upsert: true }, )
        let oldRealAmount = await Ingridient.findOne({name}, {'realAmount':1, '_id':0} ) // Получение строки без ID
            const update = {
                lastUpdate: updateDate,
                realAmount: oldRealAmount.realAmount + amount
                }
            await Ingridient.findOneAndUpdate({name},update) //Найти и обновить
        return ("Успешно добавлено/изменено")
}

async function createIngredient(req){
    const {name, realAmount, amountUnit, lastUpdate, whoUpdated:[ {updateUsername,updateDate,updateAction} ], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req
        const newIngridient = new Ingridient({name, realAmount ,lastUpdate, amountUnit, whoUpdated:[{ updateUsername, updateDate, updateAction }], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}]  })
        await newIngridient.save()
    return ("Успешно создано")
}

class storageController{
    async postIngridientsAdd(req, res){
        try{
            const {name, realAmount, amountUnit, lastUpdate, whoUpdated:[ {updateUsername,updateDate,updateAction} ], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req.body
            const ingridientSearch = await Ingridient.findOne({name})
            //Если уже есть такая запись то просто изменяем его
                if(ingridientSearch){
                    const callFunct = await addIngredient(req.body)
                    return res.json({message: callFunct})
                }
                else{
                    const callFunct1 = await createIngredient(req.body)
                    return res.json({message: callFunct1})
                }
        } 
        catch(e){
            return res.status(400).json()
        }
    }
    
    async acceptOrderInList(req, res){
        try{
            const {whatAcceptId, acceptUsername, acceptDate, acceptAction} = req.body
            const searchById = await OrderInList.findById( whatAcceptId )
                if(!searchById){
                    return res.status(400).json({message:"Не найдено!"})
                }
                if(searchById.acceptBy != null){
                    return res.status(400).json({message: `Уже подтверждено ${searchById.acceptBy}`})
                }
            const arrLength = searchById.orderInList.length
            for(let i=0; i<arrLength; i++){
                const searchName = searchById.orderInList[i].name
                const searchIngredientPush = searchById.orderInList[i]
                const UPDATE = 
                    {
                    name: searchName,
                    realAmount: searchIngredientPush.amount,
                    lastUpdate: searchIngredientPush.date,
                    amountUnit: searchIngredientPush.amountUnit,
                    whoUpdated: [
                        {
                            updateUsername: acceptUsername,
                            updateDate: acceptDate,
                            updateAction: acceptAction
                        }
                    ],
                    history: [
                        {
                            contractor: searchIngredientPush.contractor,
                            amount: searchIngredientPush.amount,
                            price: searchIngredientPush.price,
                            date: searchIngredientPush.date,
                            count: searchIngredientPush.count,
                            storageLife: searchIngredientPush.storageLife,
                            ourPrice: searchIngredientPush.ourPrice,
                            ourPricePercent: searchIngredientPush.ourPricePercent
                        }
                    ]
                    }
                
                const createOrAdd = await Ingridient.findOne({name: searchName})
                
                if(createOrAdd != null ){
                    const callFunct3 = await addIngredient(UPDATE)
                    continue
                }
                else{
                    const callFunct4 = await createIngredient(UPDATE)
                    continue
                }
            }
            const acceptOrderList = await OrderInList.findByIdAndUpdate(whatAcceptId,{acceptBy: acceptUsername, acceptDate: acceptDate}, { safe: true, upsert: true })
            return res.json({message: "Все готово, цикл успешно пройден"})
    }catch(e){
            return res.status(400)
        }
    }
}

module.exports = new storageController()