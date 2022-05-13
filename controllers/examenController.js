const {Tienda} = require('../models/tienda');

/**
 * It returns all the stores that have the category "Aluminio y Herrería"
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
async function getCategoria(req,res){
    const newUsuario = await Tienda.find({"categoria.nombre":"Aluminio y Herrería"});

    res.send(newUsuario);
}


/**
 * It returns the category of the store.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
async function getCategoria2(req,res){
    const newUsuario = await Tienda.find({"categoria.nombre":"Abarrotes y Cocina"});

    res.send(newUsuario);
}

/**
 * It finds all the documents in the collection where the length of the subcategorias array is greater
 * than 1
 * @param req - The request object.
 * @param res - The response object.
 */
async function getsubcategorias(req,res){
    const newUsuario = await Tienda.find({$where: "this.categoria.subcategorias.length > 1"});

    res.send(newUsuario);
}

/**
 * It returns all the stores created after a certain date
 * @param req - The request object.
 * @param res - The response object.
 */
async function getTiendasCreadas(req,res){
    const fecha = await Tienda.find({
        fechaHoraAlta:{
            $gt: new Date('2022-04-04') //en node es preferible poner new Date para buscar una fecha en especifico 
            //en mongodb usar ISODate
            } 
         })
            
    res.send(fecha);     
}

module.exports={
    getCategoria,
    getCategoria2,
    getsubcategorias,
    getTiendasCreadas
}
