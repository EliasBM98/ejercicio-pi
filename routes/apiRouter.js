const express = require('express');
const router = express.Router();

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

    
/*SERVICIOS*/

/*Leer todos los servicios*/
router.get('/servicios', getServicio)

/*Leer un servicio por su id*/
router.get('/servicios/:id', getServicioById)

/*Crear un servicio*/
router.post('/servicios/', createServicio)

/*Editar un servicio por su id*/
router.put('/servicios/:id', updateServicioById)

/*Eliminar un servicio*/
router.delete('/servicios/:id', deleteServicioById)



/*PRODUCTOS*/

/*Leer todos los productos*/
router.get('/productos', getProducto)

/*Leer un producto por su id*/
router.get('/productos/:id', getProductoById)

/*Crear un producto*/
router.post('/productos', createProducto)

/*Editar un servicio por su id*/
router.put('/productos/:id', updateProductoById)

/*Eliminar un servicio*/
router.delete('/productos/:id', deleteProductoById)




module.exports=router