
const pokemon = require('./models/pokemon')

const express = require("express");

const app = express();

const PORT = 3000;

app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());


app.get('/', (req, res) => {
    res.send(`<h1>Welcom to pokemon app </h1> <a href='pokemon'> pokemon</a>`)
})

// app.get('/pokemon', (req, res) => {
//     res.send(pokemon)
// })

app.get('/pokemon', (req, res) => {
    res.render('Index')
})

// app.get('/pokemon/:id', (req, res) => {
//     res.send(req.params.id)
// }) 
app.get('/pokemon/:id', (req,res) => {
    res.render('Show',{index: req.params.id})
})




app.listen(PORT, (req,res) => {
    console.log('Now listening on Port '+PORT)
})
