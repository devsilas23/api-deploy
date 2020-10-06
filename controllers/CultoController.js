const Culto = require('../models/Culto');

module.exports={


    async lista(req,res){
        const cultos = await Culto.find({ ativo: true}).sort("criadoEm");
        return res.json(cultos)
    },

    async listaRef(req,res){
        const cultos = await Culto.find({ ativo: true,_id:req.params.id}).sort("criadoEm");
        return res.json(cultos)
    },

    async novo(req,res){
        const cultos = await Culto.create(req.body)
        return res.json(cultos)
    },


    async atualiza(req,res){
        console.log('aaaaaaaaaaaaaaa',req.params.id)
        console.log('bbbbbbbbbbbbb',req.body)
        await Culto.findByIdAndUpdate(req.params.id,req.body)
        const culto = await Culto.findById(req.params.id);
       return res.json(culto)
    },

    async deleta(req,res){
        const culto = await Culto.findByIdAndDelete(req.params.id)
       return res.json(culto)
   }

};







