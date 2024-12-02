const {Schema, model} = require ('mongoose')

const authSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        default: "user"
    }


})

module.exports=model('Auth', authSchema)