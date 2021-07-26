// Iniciando com Express
const express = require('express');
const app = express();

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
    .connect('mongodb://localhost:27017/streetGames', {
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
