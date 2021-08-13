import React from 'react'

import classes from './Game.module.css'
import { Link } from 'react-router-dom'

function Game(props) {
    return (
        <li className={classes.card}>
            <figure>
                <img src={props.imagePath} alt={props.gameName}/>
            </figure>
    
            <section>
                <h2>{props.gameName}</h2>
                <h6>Desde {props.gameYear}</h6>
                <Link to={`jogo/${props._id}`}  className="btn">Ver mais</Link>
            </section>
        </li>
    )
}

export default Game