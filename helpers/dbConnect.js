//Importamos mongoose
const mongoose = require('mongoose');


/**
 * Funcion asíncrona para conectarse a la base de datos de MongoDB
 * @async
 * @param {method} mongoose.connect - Metodo de mongoose pra conectarse a una base de datos
 * @param {string} process.env.URI_CONNECT - URL con a direccion a la que queremos conectarnos
 * @param {object} resp - Objeto resultado de la espera y conexion realizada
 * @throws {object} error- con mensaje y ok chivatos del error
 */


const connection= async ()=>{

    try {
        const resp = await mongoose.connect(process.env.URI_CONNECT)
        console.log('DB CONNECTED')
        return resp
    } catch (error) {
        return{
            ok: false,
            msg: 'Error en la conexion'
        }
    }
}



module.exports={
    connection,
}


