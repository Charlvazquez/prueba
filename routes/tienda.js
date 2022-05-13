const express = require('express');
const router = express.Router();
const {Tienda} = require('../models/tienda');
const controladores = require('../controllers/examenController');
/*
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
*/
/* Routing the URL to the controller. */
router.get('/categoria/Aluminio-Herreria',controladores.getCategoria);
router.get('/categoria/Abarrotes-Cocina',controladores.getCategoria2);
router.get('/subcategorias',controladores.getsubcategorias);
router.get('/tiendas-creadas',controladores.getTiendasCreadas);


module.exports = router;
