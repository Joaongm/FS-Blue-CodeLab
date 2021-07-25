import React, { Component, Fragment } from 'react';
import classes from './GameForm.module.css';

export class GameForm extends Component {
    render() {
        return (
            <Fragment>
                <form className={classes.GameForm}>
                    <div className={classes.formControl}>
                        <label>Nome</label>
                        <input type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>URL</label>
                        <input type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>Ano de criação</label>
                        <input type='text'/>
                    </div>
                    
                    <div className={classes.formControl}>
                        <label>Descrição</label>
                        <textarea></textarea>
                    </div>
                    
                    <button>OBS: REAPROVEITAR BOTÃO</button>
                </form>
            </Fragment>
        )
    }
}

export default GameForm
