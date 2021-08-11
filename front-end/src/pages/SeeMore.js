import React, { Component } from 'react';
import history from '../history';
import Button from '../components/UI/Button/Button';

export class SeeMore extends Component {

    state = {
        data: {}
    }

    async fetchData(){
        this.setState({loading: true});

        const response = await fetch('http://localhost:5000' + history.location.pathname);

        const data = await response.json();

        console.log(data);

        this.setState({data: data.gameData})

    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        return (
            <div>
                <figure>
                    <img src={this.state.data.imagePath} alt={this.state.data.gameName}/>
                </figure>
    
                <section>
                    <h2>{this.state.data.gameName}</h2>
                    <p>{this.state.data.description}</p>
                    <h6>Desde {this.state.data.gameYear}</h6>
                </section>

                <Button>Deletar</Button>
                <Button>Atualizar</Button>
            </div>
        )
    }
}

export default SeeMore
