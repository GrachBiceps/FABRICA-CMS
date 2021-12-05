const OrderInList = require("./models/OrderInList")
const User = require("./models/User")

class prodAccController{
    async createOrderInList(req, res){
        try{
            
            const {orderInCreateDate,orderMethod, orderInList:[{name,contractor,amount,amountUnit,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req.body
            const newOrderInList = new OrderInList(req.body)
            await newOrderInList.save()
            return res.json({message:"Успешно создано"})
        } 
        catch(e){
            res.status(400).json({error: e})
        }
    }
}

module.exports = new prodAccController()