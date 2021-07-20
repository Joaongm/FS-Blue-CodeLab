const express = require('express');
const router = express.Router();

const games = [
    {id: 1, game: "Peão"},
    {id: 2, game: "Bola de Gude"},
    {id: 3, game: "Barra bandeira"},
    {id: 4, game: "Pega-pega"},
    {id: 5, game: "Pique-esconde"},
    {id: 6, game: "Amarelinha"},
]



// Rota para mostrar todos os jogos
router.get('/', (req, res, next) => {
    res.json({
        message: "Os jogos foram recuperados com sucesso!",
        allGames: games
    })
})

// // Rota para mostrar apenas 1 jogo [Passar id do jogo]
// router.get('/jogo/:jogoId', (req, res, next) => {
    
// })

// // Rota para adicionar jogo
// router.post('/adicionar-jogo', (req, res, next) => {

// })

// // Rota para atualizar jogo [Passar id do jogo]
// router.put('/jogo/:jogoId', (req, res, next) => {

// })

// // Rota para excluir jogo [Passar id do jogo]
// router.delete('/jogo/:jogoId', (req, res, next) => {

// })

module.exports = router