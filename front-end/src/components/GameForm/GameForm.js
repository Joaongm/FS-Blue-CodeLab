import React, { Component, Fragment } from 'react';
import classes from './GameForm.module.css';
import Button from '../UI/Button/Button'

export class GameForm extends Component {
    render() {
        return (
            <Fragment>
                <form className={classes.GameForm}>
                    <div className={classes.formControl}>
                        <label>Nome</label>
                        <input required type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>URL</label>
                        <input required type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>Ano de criação</label>
                        <input required type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>Descrição</label>
                        <textarea required></textarea>
                    </div>
                    
                    <Button>Enviar</Button>
                </form>
            </Fragment>
        )
    }
}

export default GameForm
