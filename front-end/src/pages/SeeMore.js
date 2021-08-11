import React, { Component } from 'react';
import history from '../history';
import Button from '../components/UI/Button/Button';
import Spinner from '../components/UI/Spinner/Spinner';

export class SeeMore extends Component {
    state = {
        data: {},
        loading: false,
        update: false,
        name: '',
        url: '',
        yearCreation: '',
        description: '',
    };

    async fetchData() {
        this.setState({ loading: true });

        const response = await fetch(
            'http://localhost:5000' + history.location.pathname
        );

        const data = await response.json();

        this.setState({ data: data.gameData, loading: false });

        this.setState({
            name: data.gameData.gameName,
            url: data.gameData.imagePath,
            yearCreation: data.gameData.gameYear,
            description: data.gameData.description,
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    async updateGame() {
        await fetch('http://localhost:5000' + history.location.pathname, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameName: this.state.name,
                imagePath: this.state.url,
                gameYear: this.state.yearCreation,
                description: this.state.description
            })
        })

        history.push('/jogos');
    }

    async deleteHandler() {
        await fetch('http://localhost:5000' + history.location.pathname, {
            method: 'DELETE',
        });

        history.replace('/jogos');
    }

    updateHandler = () => {
        this.setState({ update: true });
    };

    submitFormHandler = (event) => {
        event.preventDefault()

        this.updateGame()

    }

    render() {

        let formUpdate = (
            <form onSubmit={this.submitFormHandler}>
                <div>
                    <label>Nome</label>
                    <input
                        value={this.state.name}
                        onChange={(e) =>
                            this.setState({ name: e.target.value })
                        }
                        required
                        type="text"
                    />
                </div>

                <div>
                    <label>URL</label>
                    <input
                        value={this.state.url}
                        onChange={(e) =>
                            this.setState({ url: e.target.value })
                        }
                        required
                        type="text"
                    />
                </div>

                <div>
                    <label>Ano de criação</label>
                    <input
                        value={this.state.yearCreation}
                        onChange={(e) =>
                            this.setState({ yearCreation: e.target.value })
                        }
                        required
                        type="text"
                    />
                </div>

                <div>
                    <label>Descrição</label>
                    <textarea
                        value={this.state.description}
                        onChange={(e) =>
                            this.setState({ description: e.target.value })
                        }
                        required
                    ></textarea>
                </div>

                <Button>Enviar</Button>
            </form>
        );
        return (
            <div>
                {this.state.loading && <Spinner />}
                <figure>
                    <img
                        src={this.state.data.imagePath}
                        alt={this.state.data.gameName}
                    />
                </figure>

                <section>
                    <h2>{this.state.data.gameName}</h2>
                    <p>{this.state.data.description}</p>
                    <h6>Desde {this.state.data.gameYear}</h6>
                </section>

                <Button clicked={this.deleteHandler}>Deletar</Button>
                <Button clicked={this.updateHandler}>Atualizar</Button>

                {this.state.update && formUpdate}
            </div>
        );
    }
}

export default SeeMore;
