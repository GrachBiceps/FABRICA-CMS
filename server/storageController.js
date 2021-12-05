const { response } = require('express')
const { Result } = require('express-validator')
const Ingridient = require('./models/Ingridient')
const OrderInList = require("./models/OrderInList")
const User = require("./models/User")

const {secret} = require('./config')
const jwt = require('jsonwebtoken')

async function addIngredient(req){
    try{
    const {name, whoUpdated:[ {updateUsername,updateDate,updateAction} ], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req
        await Ingridient.findOneAndUpdate({name},{$push: {whoUpdated:[{updateUsername, updateDate, updateAction}], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}]} }, { safe: true, upsert: true }, )
        let oldRealAmount = await Ingridient.findOne({name}, {'realAmount':1, '_id':0} ) // Получение строки без ID
        let oldStorageLifeDedline = await Ingridient.findOne({name}, {'storageLifeDedline':1, '_id':0} )
            if(oldStorageLifeDedline>storageLife){
                oldStorageLifeDedline = storageLife
            }
            const update = {
                lastUpdate: updateDate,
                realAmount: oldRealAmount.realAmount + amount,
                storageLifeDedline: oldStorageLifeDedline
                }
            await Ingridient.findOneAndUpdate({name},update) //Найти и обновить
        return ("Успешно добавлено/изменено") 
    }catch(e){
        return res.status(400).json({error: e})
    }

}

async function createIngredient(req){
    const {name, amountUnit, whoUpdated:[ {updateUsername,updateDate,updateAction} ], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req
        const newIngridient = new Ingridient({name, realAmount: amount, lastUpdate: updateDate, storageLifeDedline: storageLife, amountUnit, whoUpdated:[{ updateUsername, updateDate, updateAction }], history:[{contractor,amount,price,date,count,storageLife,ourPrice,ourPricePercent}]  })
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
            return res.status(400).json({error: e})
        }
    }
    
    async acceptOrderInList(req, res){
        try{
            const {whatAcceptId, acceptDate, acceptAction} = req.body
            const token = req.headers.authorization.split(' ')[1]
            const tokenDecode = jwt.decode(token, secret)
            const searchUsername = await User.findById(tokenDecode.id)
            const acceptUsername = searchUsername.username
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
            return res.status(400).json({error: e})
        }
    }

    async getAllOrderInList(req,res){
        try{
            const getList = await OrderInList.find({acceptBy: {$exists: false}})
            if(getList.length == 0){
                return res.json({message: "Нет работы"})
            }
            const arrayList = { arrayLi : getList}
            return res.json(arrayList)
        }catch(e){
            return res.status(400).json({error: e})
        }
    }

    async getIngredientList(req, res){
        try{
            const getListIngredient = await Ingridient.find()
            return  res.json(getListIngredient)
        }catch(e){
            return res.status(400).json({error: e})
        }
    }

}

module.exports = new storageController()