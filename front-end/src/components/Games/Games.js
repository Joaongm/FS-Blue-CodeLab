import React, { Component } from 'react';
import Game from '../Game/Game';
import Spinner from '../UI/Spinner/Spinner';

class Games extends Component{

    state = {
        allGames: [],
        loading: false
    }

    async fetchData(){
        this.setState({loading: true});

        const response = await fetch('https://codelab-blue.herokuapp.com/jogos');

        const data = await response.json();

        console.log(data);

        this.setState({allGames: data.allGames, loading: false})

    }

    componentDidMount(){
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
