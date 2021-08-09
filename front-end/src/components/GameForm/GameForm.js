import React, { Component, Fragment } from 'react';
import classes from './GameForm.module.css';
import Button from '../UI/Button/Button';
import history from '../../history';

export class GameForm extends Component {
    state = {
        name: '',
        url: '',
        yearCreation: '',
        description: '',
        submit: false
    };

    nameInputHandler = (event) => {
        this.setState({ name: event.target.value });
    };

    urlInputHandler = (event) => {
        this.setState({ url: event.target.value });
    };

    yearCreationInputHandler = (event) => {
        this.setState({ yearCreation: event.target.value });
    };

    textareaHandler = (event) => {
        this.setState({ description: event.target.value });
    };

    submitFormHandler = (event) => {
        event.preventDefault();

        console.log(this.state);
        
        this.setState({submit: true})
        
        history.push('/jogos');
    };

    async componentDidUpdate(prevState, prevProps){
        if(prevState.submit === this.state.submit){
            return;
        }
        await fetch('http://localhost:5000/adicionar-jogo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                gameName: this.state.name,
                imagePath: this.state.url,
                gameYear: this.state.yearCreation,
                description: this.state.description
            })
        })

        return this.setState({submit: true})

    }

    

    render() {
        return (
            <Fragment>
                <form
                    onSubmit={this.submitFormHandler}
                    className={classes.GameForm}
                >
                    <div className={classes.formControl}>
                        <label>Nome</label>
                        <input
                            value={this.state.name}
                            onChange={this.nameInputHandler}
                            required
                            type="text"
                        />
                    </div>

                    <div className={classes.formControl}>
                        <label>URL</label>
                        <input
                            value={this.state.url}
                            onChange={this.urlInputHandler}
                            required
                            type="text"
                        />
                    </div>

                    <div className={classes.formControl}>
                        <label>Ano de criação</label>
                        <input
                            value={this.state.yearCreation}
                            onChange={this.yearCreationInputHandler}
                            required
                            type="text"
                        />
                    </div>

                    <div className={classes.formControl}>
                        <label>Descrição</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.textareaHandler}
                            required
                        ></textarea>
                    </div>

                    <Button>Enviar</Button>
                </form>
            </Fragment>
        );
    }
}

export default GameForm;
