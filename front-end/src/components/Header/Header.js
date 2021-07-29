import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css'

const header = () => {
    return (
        <header className={classes.Header}>
            <h1>
                Jogos de rua
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/jogos">Home
                            
                        </Link>
                    </li>
                    <li>
                        <Link to="/adicionar-jogo">Adicionar
                            
                        </Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre
                            
                        </Link>
                    </li>
                  
                    

                </ul>
            </nav>
        </header>
    )
}

export default header
