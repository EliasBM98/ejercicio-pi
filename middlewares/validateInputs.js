/*MIDDLEWARE PARA VALIDACION GLOBAL */

//Validation result contiene todos los resultados de las validaciones 
const {validationResult} = require('express-validator')

/**
 
Middleware para validar los inputs.
Si hay errores, devuelve un res 400 con los errores.
Si todo está bien continua.
@param {Object} req - Objeto solicitud.
@param {Object} res - Objeto respuesta.
@param {Function} next - Función para continuar.*/

const validateInputs = (req, res, next)=>{

    const errores = validationResult(req) /*ojo este req es el que trae todas las validaciones*/

    if(!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            msg: "error desde validateInputs",
            errores: errores.mapped()
        })
    }
    next()
}


module.exports = {
    validateInputs
}