import React, { Component, Fragment } from 'react';
import classes from './GameForm.module.css';
import Button from '../UI/Button/Button';
import { history } from 'react-router-dom'

export class GameForm extends Component {

    state = {
        name: '',
        url: '',
        yearCreation: '',
        description: '',
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

        this.setState({ name: '', url: '', yearCreation: '', description: '' });

        console.log(this.state);
        
        

    };

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
