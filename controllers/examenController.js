const {Tienda} = require('../models/tienda');

async function getCategoria(req,res){
    const newUsuario = await Tienda.find({"categoria.nombre":"Aluminio y Herrería"});

    res.send(newUsuario);
}

async function getCategoria2(req,res){
    const newUsuario = await Tienda.find({"categoria.nombre":"Abarrotes y Cocina"});

    res.send(newUsuario);
}

async function getsubcategorias(req,res){
    const newUsuario = await Tienda.find({$where: "this.categoria.subcategorias.length > 1"});

    res.send(newUsuario);
}

module.exports={
    getCategoria,
    getCategoria2,
    getsubcategorias
}