const mongoose = require('mongoose');

const  CultoSchema = new mongoose.Schema({
    descricao:String,
    diasemana:String,
    capacidade:Object,
    ativo:Boolean,
    criadoEm:{
        type: Date,
        default:Date.now
    },
});

module.exports = mongoose.model("Culto",CultoSchema);