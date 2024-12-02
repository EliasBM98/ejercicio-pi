//Importo express
const express = require('express');

//Guardo el metodo router de express en una variable
const router =express.Router();


//importo las funciones para las rutas
const {
    createUser,
    loginUser,
    renewToken
}=require('../controllers/authController')


//Ruta REGISTER
//router.post('/new', [validacion], createUser)

//Ruta LOGIN
//router.post('/', [validación ], loginUser)

//Ruta RENEW
//router.get('/renew', validarJWT, renewToken)


module.exports=router