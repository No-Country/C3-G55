const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,        
    },
    start: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }, 
    worker:{
        type: String,
        //required: true
    }

});




module.exports = model('Evento', EventoSchema );