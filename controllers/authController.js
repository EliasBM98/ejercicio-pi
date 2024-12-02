const Auth = require('../models/authModel')



//Validar que el usuario no existe
/*let usuario = await Auth.findOne({email})
    if (usuario){
        return res.status(400).json({
            ok: false,
            msg: "el usuario ya existe"
        })
    }*/


//Funcion REGISTER
const createUser = async (req, res)=>{
    const body = req.body;
    const email = req.body.email;
    const user = new User(body);

    try {
        const userSaved = await user.save()
        return req.status(201).json({
            ok:true,
            msg: 'Usuario creado',
            userSaved
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario, pongase en contacto con el admin'
        })
    }
}


//Funcion LOGIN
/*const loginUser = async (req, res)=>{


} */


//Funcion RENEW
/*const renewToken = async (req, res)=>{


}*/


module.exports={
    createUser
}