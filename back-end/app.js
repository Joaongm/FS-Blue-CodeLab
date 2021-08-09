// Iniciando com Express
const express = require('express');
const app = express();

// CORS Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PU, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
})

const mongoose = require('mongoose');

// Importando rotas
const streetGamesRoutes = require('./routes/streetGames');

// Porta da aplicação
const port = 5000;

// Mecanismo para ler solicitações de entrada json.
app.use(express.json());

// Usando rotas
app.use(streetGamesRoutes);

mongoose
    .connect('mongodb+srv://david:cVw4KsUKXD7X373@cluster0.0l8r2.mongodb.net/Games?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(port, () => {
            console.info(
                `A aplicação está rodando em http://localhost:${port}`
            );
        });
    })
    .catch((err) => {
        console.log(err);
    });
