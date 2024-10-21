const {Schema, model} = require ('mongoose')

const servicioSchema = new Schema({
    servicio:{
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

module.exports=model('Servicio', servicioSchema)