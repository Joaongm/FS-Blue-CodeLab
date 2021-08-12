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

// Rota para mostrar apenas 1 jogo [Passar id do jogo]
router.get('/jogo/:jogoId', async (req, res, next) => {
    const gameId = req.params.jogoId;

    try{    
        const foundGame = await StreetGames.findById(gameId);

        if(!foundGame){
            throw new Error('Jogo não encontrado!!!')
        }

        return res.json({
            message: 'Jogo encontrado!',
            gameData: foundGame
        })
    }catch(err) {
        console.log(err)
    }
    

})

// Rota para adicionar jogo
router.post('/adicionar-jogo', async (req, res, next) => {
    const gameData = req.body;

    try {
        const newGame = await StreetGames.create(gameData);
    
        await newGame.save();
    
        return res.status(201).json({
            message: "Jogo criado com sucesso!",
            newGame: newGame
        })
    }catch(err){
        console.log(err);
    }

})

// Rota para atualizar jogo [Passar id do jogo]
router.put('/jogo/:jogoId', async (req, res, next) => {
    const gameData = req.body;
    const gameId = req.params.jogoId;

    try {
        let foundGame = await StreetGames.findById(gameId);

        if(!foundGame){
            throw new Error('Jogo não encontrado!!!')
        }

        foundGame.gameName = gameData.gameName
        foundGame.imagePath = gameData.imagePath
        foundGame.gameYear = gameData.gameYear
        foundGame.description = gameData.description

        await foundGame.save()
    
        return res.json({
            message: "Jogo atualizado com sucesso!",
            updatedGame: foundGame
        })
    }catch(err){
        console.log(err);
    }
})

// Rota para excluir jogo [Passar id do jogo]
router.delete('/jogo/:jogoId', async (req, res, next) => {
    const gameId = req.params.jogoId

    try{
        const foundGame = await StreetGames.findByIdAndDelete(gameId);
        if(!foundGame){
            throw new Error('Jogo não encontrado!!!')
        }

        return res.json({
            message: "Jogo deletado",
            gameId: gameId
        })

    }catch (err) {
        console.log(err)
    }

})

module.exports = router