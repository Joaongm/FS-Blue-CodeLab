import React, { Component } from 'react';
import Game from '../Game/Game';
import history from '../../history';
import Spinner from '../UI/Spinner/Spinner';

class Games extends Component{

    state = {
        allGames: [],
        loading: false
    }

    async fetchData(){
        this.setState({loading: true});

        const response = await fetch('https://localhost:5000/jogos');

        const data = await response.json();

        console.log(data);

        this.setState({allGames: data.allGames, loading: false})

    }


    // OBS: Com a aplicação mockada temos um PROBLEMA! Toda vez que somos redirecionados, perdemos
    // os dados que já adicionamos. Isso ocorre pois atualizamos a páginas e os dados na memória se
    // perdem! Isso será corrigido quando integrarmos o banco de dados.
    componentDidMount = () => {

        if(history.location.search === ""){
            return;
        }

        const queryParams = new URLSearchParams(history.location.search);

        const gameName = queryParams.get('name');
        const imagePath = queryParams.get('url');
        const gameYear = queryParams.get('yearCreation');
        const description = queryParams.get('description');

        const gameInfos = {
            gameName: gameName,
            imagePath: imagePath,
            gameYear: gameYear,
            description: description,
            id: Math.random()
        }

        if(gameName !== '' && imagePath !== '' && gameYear !== '' && description !== ''){
            this.setState( (prevState) => {
                return { allGames: [gameInfos, ...prevState.allGames]}
            })
            
        }
    }

    render() {

        
        
        return (
            <ul>
                <Spinner/>

                {
                    this.state.allGames.map(gameKey => <Game key={gameKey.id} {...gameKey}/>)
                }
            </ul>
        );
    }
}

export default Games;
