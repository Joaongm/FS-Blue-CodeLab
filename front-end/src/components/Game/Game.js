import React from 'react'

import classes from './Game.module.css'

function Game(props) {
    return (
        <li className={classes.card}>
            <figure>
                <img src={props.imagePath} alt={props.gameName}/>
            </figure>
    
            <section>
                <h2>Brincadeira {props.gameName}</h2>
                <h6>Ano {props.gameYear}</h6>
                <a href="" className="btn">Ver mais</a>
            </section>
        </li>
    )
}

export default Game
