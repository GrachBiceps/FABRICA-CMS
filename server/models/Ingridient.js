const {Schema, model} = require('mongoose')

const Ingridient = new Schema({
    name: {type: String, unique:true, required: true},
    realAmount: {type: Number, required: true},
    amountUnit: {type: String, required: true},
    lastUpdate: {type: Date, required: true},
    storageLifeDedline: {type: Date, required:true},
    whoUpdated: [
        { 
            updateUsername: {type: String, required: true},
            updateDate: {type: Date, required: true},
            updateAction: {type: String, required: true}
        }
    ],
    history: [
        {   
            contractor: {type: String, required: true} ,
            amount: {type: Number, required: true},
            price: {type: Number, required: true},
            date: {type: Date, required: true},
            count: {type: Number, required: true},
            storageLife: {type: Date, required: true},
            ourPrice: {type: Number, required: true},
            ourPricePercent: {type: Number, required: true}
        }
    ]
})

module.exports = model('Ingridient', Ingridient)