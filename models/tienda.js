const mongoose = require('mongoose');

const tiendaSchema = mongoose.Schema({
    categoria:{
        nombre:{
            type:String
        },
        subcategorias:[
            {
                nombre:String
            }
        ]
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