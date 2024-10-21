# Ejercicio API
## 1. Mi aplicación
Esta aplicación es una API que nos va a permitir hacer consultas haciendo uso de la base de datos de MongoDB ATLAS y de la aplicación Postman.

## 2. Partes
### 2.1 APP.JS
Define la estructura de la aplicación, aqui encontramos:
**-Express:** Framework en el que vamos a basar la aplicación, es el sistema con el que enrutamos cada módulo de nuestra aplicación.

**-Servidor:** Establecemos un servidor local a través del cual vamos a desarrollar la aplicacón.

**-Función conexión:** Vamos a importar la función de conexión a la base de datos que nos va a dar la información con la que va a trabajar la API

**-Router:** también vamos a importar el router que posee todas las rutas que nos van a permitir hacer las consultas. 


### 2.2 Routes
Dentro de la carpeta Routes nos encontramos el archivo apiRouter.js, posee los siguientes elementos:
**-Express:** Lo primero es una invocación de express y una variable en la que vamos a guardar el método Router de Express

**-Express-Validator:** Importamos una desestructuración del componente Express-Validator de su método Check, esto nos servirá para hacer validaciónes en las consultas a la base de datos. Adicionalmente veremos una Importación de la **función validateImputs** la cual nos sirve para validar los valores introducidos en las consultas.

**-Funciones:** A continuación vemos una desestructuración en la que importamos todas las funciones establecidas en Controllers. 

**-Rutas:** Este es el grueso del módulo de Router, nos encontramos con dos bloques de funciones, el primero para Servicios y el siguiente para productos. Ambos bloques poseen las siguientes 5 rutas:

1. **Leer todos los servicios/productos:**
En esta primera ruta, utilizamos el método GET para leer o consultar datos, obtendremos todos los documentos de cada servicio/producto registrado en ATLAS.

2. **Leer un servicio/producto por su id:**
En esta segunda ruta se utiliza tambieén el método GET para leer datos, la diferencia es que en esta consulta el endpoint posee un ID de un documento concreto por lo que únicamente recibiremos un solo documento de ATLAS.

3. **Crear un servicio/producto:**
La tercera ruta de esta API utiliza el método POST, este método nos permite crear nuevos documentos para guardar servicios/productos en la coleccion correspondiente de ATLAS. 

4. **Editar un servicio/producto por su id:**
La cuarta ruta de esta API nos sirve para editar un documento de las colecciones de Servicios o productos que hay en ATLAS. Para que esto sea posible tenemos que utilizar el método PUT el cual nos permite editar información. 

5. **Eliminar un servicio/producto:**
La quinta ruta de esta API hace uso del método DELETE, este método nos permite borrar inromación. Esta consulta funciona añadiendo el ID del documento que queremos borrar en ATLAS al endpoint.

**-Validaciones:** Dentro de cada ruta haremos uso de __Check__ y __validateInputs__, en función de los campos que queramos validar

**-Exportación:** Por último vemos la exportación del módulo de rutas.

### 2.3 Controllers

### 2.4 Helpers

### 2.5 Middlewares

### 2.6 Models

### 2.7 Otros documentos de interes
 
**configurar .env**
```JavaScript
    PORT='puerto del servidor'
    URI_CONNECT=uri de conexion a mongoDB
```

**POSTMAN**
[Acceso a la documentacion de la API en postman](https://documenter.getpostman.com/view/38899971/2sAXxY3ocn)


## Instalación

1. Clona el repositorio:

[git clone](https://github.com/usuario/mi-app-web.git)

2. Instala las dependencias:
```shell
npm install cors
npm install dotenv
npm install express
npm install express-validator
npm install mongoose

```

3. Ejecuta el servidor de desarrollo:
```shell
npm start dev
```