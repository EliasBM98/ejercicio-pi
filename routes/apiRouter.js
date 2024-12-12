//Importo express
const express = require('express');
//Importo el metodo express de express-validator
const {check} = require('express-validator');
//Guardo el metodo router de express en una variable
const router = express.Router();
//Importo la funcion middleware validateInputs 
const {validateInputs} = require('../middlewares/validateInputs');

//importo las funciones para las rutas dessde controllers
const{  getIndex,
        getServicio,
        getServicioById,
        createServicio,
        updateServicioById,
        deleteServicioById,
        getProducto,
        getProductoById,
        createProducto,
        updateProductoById,
        deleteProductoById
    }=require('../controllers/apiControllers')


/*index basico de pruebas*/
router.get("/", getIndex)

    
/*-----BLOQUE SERVICIOS-----*/

/*Leer todos los servicios*/
router.get('/servicios', getServicio)


/*Leer un servicio por su id*/
router.get('/servicios/:id', [
    check('id', 'El id introducido no existe').not().exists(),
    validateInputs

], getServicioById)


/*Crear un servicio*/
router.post('/servicios/', [
    check('servicio', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('disponible', 'El servicio está disponible?').not().isEmpty(),
    validateInputs

], createServicio)


/*Editar un servicio por su id*/
router.put('/servicios/:id', [
    check('servicio', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('disponible', 'El servicio está disponible?').not().isEmpty(),
    validateInputs

],updateServicioById)


/*Eliminar un servicio*/
router.delete('/servicios/:id', [
    check('id', 'El id introducido no existe').not().exists(),
    validateInputs

],deleteServicioById)



/*-----BLOQUE PRODUCTOS-----*/

/*Leer todos los productos*/
router.get('/productos', getProducto)


/*Leer un producto por su id*/
router.get('/productos/:id', [
    check('id', 'El id introducido no existe').not().exists(),
    validateInputs

], getProductoById)


/*Crear un producto*/
router.post('/productos', [
    check('producto', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('disponible', 'El producto está disponible?').not().isEmpty(),
    validateInputs
    
], createProducto)


/*Editar un servicio por su id*/
router.put('/productos/:id', [
    check('producto', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('disponible', 'El producto está disponible?').not().isEmpty(),
    validateInputs

], updateProductoById)


/*Eliminar un servicio*/
router.delete('/productos/:id', [
    check('id', 'El id introducido no existe').not().exists(),
    validateInputs

], deleteProductoById)




module.exports=router