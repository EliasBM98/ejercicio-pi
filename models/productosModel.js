const {Schema, model} = require ('mongoose')

const servicioSchema = new Schema({
    producto:{
        type: String,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    disponible:{
        type: Boolean,
        required: true,
    }

})

module.exports=model('Producto', servicioSchema)