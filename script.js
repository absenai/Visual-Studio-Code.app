const express = require('express')
const { restart } = require('nodemon')

const app = express()

const carros = require('./carros.js')
const pilotos = require('./pilotos.js')

app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        "testando": 1
    })
})

app.get('/carros', (req, res) => {
    res.json(carros)
})

app.get('/pilotos', (req, res) => {
    res.json(pilotos)
});

app.post('/carros', function(req, res){
    carros.push({
        "id": 2,
        "idCarro": 2,
        "nome": "Ferrari",
        "torque": 550,
        "ano": 2018
      })
    res.json(carros)
})

app.post('/pilotos', function(req, res){
    pilotos.push({
        id: 2,
        idPilotos: 2,
        nome: "Piquet",
        altura: 188,
        idade: 21
    })
    res.json(pilotos)
})
app.get('/pilotos/:id', function(req, res){
    res.json(pilotos)
})
app.delete('/pilotos/:id', function(req, res){
    const removidoP = pilotos[req.params.id]
    pilotos.splice(req.params.id, 1)

    res.json(removidoP)
})
app.delete('/carros/:id', function(req, res){
    const removidoC = carros[req.params.id]
    carros.splice(splice.params.id, 1)

    res.json(removidoC)
})
app.get('/carros/:id', function(req,res){
    res.json(pilotos)
})
app.listen(3000, function(){
    console.log("Tentando Conectar teste")
})
