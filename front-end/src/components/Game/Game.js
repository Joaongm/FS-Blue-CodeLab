import React from 'react'

function Game(props) {
    console.log(props)
    return (
        <li>
            <img src={props.imagePath} alt={props.nameGame}/>
            <section>
                <h2>Brincadeira {props.nameGame}</h2>
                <h6>Ano {props.yearGame}</h6>
            </section>
        </li>
    )
}

export default Game
