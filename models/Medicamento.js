const mongoose =require ('mongoose')
const Schema = mongoose.Schema
let Medicamento =new Schema({
    nombre: {type:String},
    sustancia:{type:String},
    dosis:{type:String},
    toxicidad:{type:String},
    serie:{type:Number}
},{
    collectionn: 'medicamentos'
})


module.exports = mongoose.model('Medicamento',Medicamento)


