const express = require('express')

require('dotenv').config()
const cors=require('cors')


const {connection} = require('./helpers/dbConnect.js')


/*Server*/
const app=express();
const port=process.env.PORT



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


/*Carpeta estatica*/
app.use(express.static(__dirname + '/public'))

/*Conexion*/
connection()

/*Cors*/
//app.use(cors())

/*Rutas*/
app.use('/api/v1', require('./routes/apiRouter'))
app.use('/api/v1/auth', require('./routes/authRouter.js'))


//app.use('/api/v2', ()=>{ })


/*Listener*/
app.listen(port, ()=>{
    console.log(`Server on port ${port}`)
})

