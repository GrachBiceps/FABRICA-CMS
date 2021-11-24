const OrderInList = require("./models/OrderInList")


class prodAccController{
    async createOrderInList(req, res){
        try{
            const {orderInCreator,orderInCreateDate,orderMethod, orderInList:[{name,contractor,amount,amountUnit,price,date,count,storageLife,ourPrice,ourPricePercent}] } = req.body
            const newOrderInList = new OrderInList(req.body)
            await newOrderInList.save()
            return res.json({message:"Успешно создано"})
        } 
        catch(e){

        }
    }
}

module.exports = new prodAccController()