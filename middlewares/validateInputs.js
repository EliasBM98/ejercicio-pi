/*MIDDLEWARE PARA VALIDACION GLOBAL */

//Validation result contiene todos los resultados de las validaciones 
const {validationResult} = require('express-validator')

/**
 * Funcion para validar inputs instroducidos en las consultas
 * @async
 * @param {object} req - Requerimiento que contiene todas las validaciones
 * @param {Object} res - Respuesta en caso de que errores sea diferente a vacio
 * @param {Object} next - funcion que tiene lugar si la validacion es aprobada
 * 
 * @returns {json} - Documento JSON con la informacion de los errores en la validacion
 * @param {Boolean} ok - Chivato de control para saber que se ha producido un error en la validacion
 * @param {String} msg - Chivato de control para saber que se ha producido un error en la validacion
 * @param {Object} errores - Objeto con todos los errores que se han producido
 */


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