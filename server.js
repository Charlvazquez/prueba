const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Base de datos
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName: 'examen'
})
.then(()=>{
    console.log('Conexion de base de datos lista')
})
.catch((err)=>{
    console.log(err);
})



//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
const rutaTienda= require('./routes/tienda');

app.get('/',(req,res)=>{
    res.send('hola mundo')
})
app.use('/v1/tiendas',rutaTienda);



//puerto del servidor
app.listen(4070, () => {
    //console.log(api); //mostrar conectividad con la env desde consola
    console.log('El servidor esta corriendo http://localhost:4070')
});