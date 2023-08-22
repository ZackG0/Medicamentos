const express = require("express")
const medicamentoRuta = express.Router()

//Declaramos un objeto de nuestro modelo//
let Medicamento = require('../models/Medicamento')

//Agregar un nuevo medicamento//
medicamentoRuta.route('/create').post((req,res)=>{
    Medicamento.create(req.body)
    .then((data)=>{
        console.log('se inserto un medicamento')
        res.send(data)
    })
    .catch((err)=>{
        console.error.apply(err)
    })
})

//Obtenemos todos los medicamentos//
medicamentoRuta.route('/medicamentos').get((req,res)=>{
    Medicamento.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Obtenemos un solo medicamento por su id//
medicamentoRuta.route('/medicamento/:id').get((req,res)=>{
    Medicamento.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Actualizar un medicamento//
medicamentoRuta.route('/update/:id').put((req,res)=>{
    Medicamento.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Metodo para eliminar medicamento//
medicamentoRuta.route('/delete/:id').delete((req,res)=>{
    Medicamento.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports = medicamentoRuta;
