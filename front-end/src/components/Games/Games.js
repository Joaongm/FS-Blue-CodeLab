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

        const response = await fetch('http://localhost:5000/jogos');

        const data = await response.json();

        console.log(data);

        this.setState({allGames: data.allGames, loading: false})

    }


    // OBS: Com a aplicação mockada temos um PROBLEMA! Toda vez que somos redirecionados, perdemos
    // os dados que já adicionamos. Isso ocorre pois atualizamos a páginas e os dados na memória se
    // perdem! Isso será corrigido quando integrarmos o banco de dados.
    componentDidMount = () => {
        this.fetchData()
    }
    

    render() {

        
        
        return (
            <ul>
                {this.state.loading && <Spinner/>}

                {
                    this.state.allGames.map(gameKey => <Game key={gameKey._id} {...gameKey}/>)
                }
            </ul>
        );
    }
}

export default Games;
