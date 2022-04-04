const {Schema, model} = require('mongoose')

const User = new Schema({
    name: {type: String, required:true},
    surname: {type: String, required:true},
    gender: {type: String, required:true},
    birthday: {type: Date, required:true},
    avatar: {type: Number, required: false, default: 0},
    username: {type: String, unique:true, required:true},
    password: {type: String, required:true},
    role: [{type: String, ref: 'Role'}]
})

module.exports = model('User', User)