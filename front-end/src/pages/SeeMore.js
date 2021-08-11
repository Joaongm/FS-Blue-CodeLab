import React, { Component } from 'react';
import history from '../history';
import Button from '../components/UI/Button/Button';
import Spinner from '../components/UI/Spinner/Spinner'

export class SeeMore extends Component {

    state = {
        data: {},
        loading: false
    }

    async fetchData(){
        this.setState({loading: true});

        const response = await fetch('http://localhost:5000' + history.location.pathname);

        const data = await response.json();

        this.setState({data: data.gameData, loading: false})

    }

    componentDidMount(){
        this.fetchData()
    }

    async deleteHandler () {
        await fetch('http://localhost:5000' + history.location.pathname, {
            method: 'DELETE'
        });

        history.replace('/jogos')
    }

    render() {

        console.log(history)

        return (
            <div>
                { this.state.loading && <Spinner/> }
                <figure>
                    <img src={this.state.data.imagePath} alt={this.state.data.gameName}/>
                </figure>
    
                <section>
                    <h2>{this.state.data.gameName}</h2>
                    <p>{this.state.data.description}</p>
                    <h6>Desde {this.state.data.gameYear}</h6>
                </section>

                <Button clicked={this.deleteHandler}>Deletar</Button>
                <Button>Atualizar</Button>
            </div>
        )
    }
}

export default SeeMore
