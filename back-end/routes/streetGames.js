const express = require('express');
const router = express.Router();

const StreetGames = require('../Models/streetGames')

// Rota para mostrar todos os jogos
router.get('/jogos', async (req, res, next) => {

    const allGames = await StreetGames.find({})

    res.json({
        message: "Os jogos foram recuperados com sucesso!",
        allGames: allGames
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