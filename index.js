const express = require("express");
const app = express();

const mongoose = require("mongoose");

require("dotenv").config();
var methodOverride = require("method-override");

const PORT = 5000;

const Pokemon = require("./models/pokemon");

// ----------middleware----------------------//
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(express.json({ extended: false }));
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

app.get("/", (req, res) => {
    res.send(`<h1> Welcome to Pokemon App </h1> <a href='pokemon'> <h2>POKEMON</h2></a>`);
});


// app.post("/pokemon", async (req, res) => {
//   const newPokemon = await Pokemon.create(req.body);
//   res.json(newPokemon);
// });

//------- create post NEW POKEMON CREATE ROUTE [C]RUD-----//

app.get("/create", async (req, res) => {
    try {
        res.render("Create");
    } catch (error) {
        res.status(500).send('Error', error);
    }
});

app.post("/create", async (req, res) => {
    try {
        const pokemonName = await req.body.name.toLowerCase();
        const newPokemon = await Pokemon.create({
            name: pokemonName,
            img: `http://img.pokemondb.net/artwork/${pokemonName}`,
        });
        res.redirect("/pokemon");
    } catch (error) {
        res.status(500).send(error);
    }
});

//-------- create Route C[R]UD------//
app.get("/pokemon", async (req, res) => {
    try {
        const allPokemon = await Pokemon.find({});
        res.render("Index", { pokemon: allPokemon }); //<Index pokemon={allPokemon} />
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/pokemon/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        res.render("Show", { pokemon });
    } catch (error) {
        res.status(500).send(error);
    }
});

//-----EDIT Pokemon create Route CR[U]D-----------//
app.put("/replace/:id", async (req, res) => {
    try {
        const newPokemon = {
            name: req.body.name.toLowerCase(),
            img: `http://img.pokemondb.net/artwork/${req.body.name}`,
        };
        await Pokemon.findOneAndReplace({ _id: req.params.id }, newPokemon);
        res.redirect("/pokemon");
    } catch (error) {
        res.status(500).send(error);
    }
});

//------DELETE Pokemon create Route CRU[D]-------------//
app.delete("/delete/:id", async (req, res) => {
    try {
        await Pokemon.findOneAndDelete({ _id: req.params.id });
        res.redirect("/pokemon");
    } catch (error) {
        res.status(500).send(error);
    }
});

//----Listening to the port----//
app.listen(PORT, (req, res) => {
    console.log(`listening on Port ${PORT}`);
});

// functions, variables (local) camelCase
// classes PascalCase new ClassName
// .env variables CAPITAL_SNAKE_CASE
// css classes and ids class-name id-name
