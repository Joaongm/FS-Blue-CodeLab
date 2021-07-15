const express = require("express");

const app = express();

const port = 5000;

app.use(express.json());

const jogos = [
    "Pique esconde",
    "Bet",
    "Queimada",
    "Amarelinha",
    "Rola-bosta",
    ""
]