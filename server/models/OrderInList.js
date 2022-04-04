const {Schema, model} = require('mongoose')

const OrderInList = new Schema({
    
    orderInCreator: {type: String, required: true},
    orderInCreateDate: {type: String, required: true},
    orderMethod: {type: String, required: true},
    acceptBy: {type: String, required: false},
    acceptDate: {type: String, required: false},
    orderInList: [
        {
            name: {type: String, required: true},
            contractor: {type: String, required: true} ,
            amount: {type: Number, required: true},
            amountUnit: {type: String, required:true},
            price: {type: Number, required: true},
            date: {type: String, required: true},
            count: {type: Number, required: true},
            storageLife: {type: String, required: true},
            ourPrice: {type: Number, required: true},
            ourPricePercent: {type: Number, required: true}
        }
    ]
})

module.exports = model('OrderInList', OrderInList)