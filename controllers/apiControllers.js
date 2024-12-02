const Servicio = require('../models/serviciosModdel')
const Producto = require('../models/productosModel')


const getIndex = (req, res)=>{
    res.render('index', {
        titulo: "Indice"
    })
}

/*--------------------SERVICIOS--------------------*/
/*Leer todos los servicios*/
const getServicio = async (req, res)=>{
    try {
        const servicios = await Servicio.find();
        return res.status(200).json({
                ok:true,
                total_results: servicios.length,
                msg: 'obteniendo todos los servicios',
                data: servicios
        })
    } catch (error) {
        return res.status(500).json({
                ok: false,
                msg: 'Error al obtener los datos, pongase en contacto con el administrador',
                data:[]
          })
    }
}



/*Leer un servicio por su id*/
const getServicioById = async(req, res)=>{
    const id = req.params.id
    try {
        const servicio = await Servicio.findById(id); 
        return res.status(200).json({
                ok:true,
                msg: 'obteniendo un servicio por su id',
                servicio
        })
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }

}



/*Crear un servicio*/
const createServicio = async (req, res)=>{
    const body=req.body
    const servicio = new Servicio(body)

    try {
        const servicioSaved = await servicio.save()
        return res.status(201).json({
                ok:true,
                msg: 'Creando un servicio',
                servicioSaved
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los datos, pongase en contacto con el administrador'
          })  
    }
}


/*Editar un servicio por su id*/
const updateServicioById = async(req, res)=>{
    try {
        const id = req.params.id
        const servicio = req.body.servicio
        const descripcion = req.body.descripcion
        const disponible = req.body.disponible

        const servicioActualizado = await Servicio.findByIdAndUpdate(id, {servicio, descripcion, disponible},{new: true});
            return res.status(200).json({
                ok:true,
                msg: 'actualizando un servicio por su id',
                servicioActualizado
            })

    } catch (error) {
        console.log(error)
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }
}


/*Eliminar un servicio*/
const deleteServicioById = async (req, res)=>{
    const id = req.params.id

    try {
        const servicio = await Servicio.findByIdAndDelete(id, {new: true}); //req.params - devuelve string
        if(!Servicio){
            return res.status(404).json({
                    ok: false,
                    msg: "servicio no encontrado"
            })
        }

        return res.status(200).json({
                ok:true,
                msg: 'Eliminando un servicio por su id',
                servicio
        })

    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }
}



/*--------------------PRODUCTOS--------------------*/

/*Leer todos los productos*/
const getProducto = async (req, res)=>{
    
    try {
        const productos = await Producto.find();
        return res.status(200).json({
                ok:true,
                total_results: productos.length,
                msg: 'Obteniendo todos los productos',
                data: productos
        })
    } catch (error) {
        return res.status(500).json({
                ok: false,
                msg: 'Error al obtener los datos, pongase en contacto con el administrador',
                data: []
          })
    }
}


/*Leer un producto por su id*/
const getProductoById = async(req, res)=>{
    const id = req.params.id
    try {
        const producto = await Producto.findById(id); 
        return res.status(200).json({
                ok:true,
                msg: 'obteniendo un producto por su id',
                producto
        })
    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }
}


/*Crear un producto*/
const createProducto = async (req, res)=>{
    const body=req.body
    const producto = new Producto(body)
    
    try {
        const productoSaved = await producto.save()
        return res.status(201).json({
                 ok:true,
                msg: 'Creando un producto',
                productoSaved
        })
            
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener los datos, pongase en contacto con el administrador'
            })  
    }
}




/*Editar un producto por su id*/
const updateProductoById = async(req, res)=>{
    try {
        const id = req.params.id
        const producto = req.body.producto
        const descripcion = req.body.descripcion
        const disponible = req.body.disponible

        const productoActualizado = await Producto.findByIdAndUpdate(id, {producto, descripcion, disponible},{new: true});
            return res.status(200).json({
                ok:true,
                msg: 'actualizando un producto por su id',
                productoActualizado
            })

    } catch (error) {
        console.log(error)
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }
}

/*Eliminar un servicio*/
const deleteProductoById = async (req, res)=>{
    try {
        const producto = await Producto.findOneAndDelete({_id: req.params.id}); //req.params - devuelve string
        if(!Producto){
            res.status(404).json({
                msg: "Producto no encontrado"
            })
        }

        res.status(200).json({
            ok:true,
            msg: 'Eliminando un producto por su id',
            producto
        })

    } catch (error) {
      return res.status(500).json({
        ok: false,
        msg: 'Error al obtener los datos, pongase en contacto con el administrador'
      })
    }
}





module.exports={
    getIndex,
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
}
