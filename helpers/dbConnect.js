const mongoose = require('mongoose');

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