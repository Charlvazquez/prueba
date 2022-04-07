const mongoose = require('mongoose');

const tiendaSchema = mongoose.Schema({
    categoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categorias',
        required:true
    },
    direccion:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'direccion',
        required:true
    }],
    nombrePropietario:{
        type:String,
        required:true
    },
    nombreTienda:{
        type:String,
        required:true
    },
    fechaHoraAlta:{
        type:Date,
        required:true
    },
})

exports.Tienda = mongoose.model('examen1',tiendaSchema);