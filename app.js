// Iniciando com Express
const express = require('express');
const app = express();

// Importando rotas
const streetGamesRoutes = require('./routes/streetGames');

// Porta da aplicação
const port = 5000;

// Mecanismo para ler solicitações de entrada json.
app.use(express.json());

// Usando rotas
app.use(streetGamesRoutes);


app.listen(port, () => {
    console.info(`A aplicação está rodando em http://localhost:${port}`)
})