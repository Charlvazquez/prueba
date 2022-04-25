const express = require('express');
const router = express.Router();
const {Tienda} = require('../models/tienda');
const controladores = require('../controllers/examenController');

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

router.get('/conteo/abarrotes',controladores.getCategoria2);

router.get('/conteo/aluminio',controladores.getCategoria);

router.get('/subcategorias',controladores.getsubcategorias);


module.exports = router;