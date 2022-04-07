const express = require('express');
const router = express.Router();
const {Tienda} = require('../models/tienda');

router.get('/', async(req,res)=>{
    const ListaTienda = await Tienda.find();
    if(!ListaTienda){
        res.status(500).json({message:"¡Error al buscar!"})// en caso de que haya un problema mandara un mensaje de error
    }
    res.status(200).send(ListaTienda)//en caso de que no haya un problema mostrara toda la lista de autores
});

//conteo normal de datos 
router.get('/conteo/tiendas',async(req,res)=>{
   const tiendasConteo = await Tienda.countDocuments({})

   if(!tiendasConteo){
       res.status(500).json({success:false})
   }
   res.send({
    conteo:tiendasConteo
   });

});

router.get('/conteo/tiendas/abarrotes',async(req,res)=>{
    const tiendasConteo = await Tienda.countDocuments({categoria:{nombre:'Abarrotes y Cocina'}})
    if(!tiendasConteo){
        res.status(500).json({success:false})
    }
    res.send({
        tiendasConteo
    });
 
 });

 router.get('/conteo/tiendas/abarrotes2',async(req,res)=>{
    const subcategoriaConteo = await Tienda.countDocuments({categoria:{nombre:"Aluminio y Herrería"}})
   
 
    if(!subcategoriaConteo){
        res.status(500).json({success:false})
    }
    res.send({
     conteo:subcategoriaConteo
    });
 
 });
//conteo con datos especificos busqueda por este id


module.exports = router;