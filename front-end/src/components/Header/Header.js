import React from 'react'

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
                        <a href="#">Home
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">Adicionar
                            
                        </a>
                    </li>
                    <li>
                        <a href="#">Sobre
                            
                        </a>
                    </li>
                  
                    

                </ul>
            </nav>
        </header>
    )
}

export default header
