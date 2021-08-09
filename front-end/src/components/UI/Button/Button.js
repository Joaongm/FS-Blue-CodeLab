import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button className={classes.Button} onClick={props.clicked} type={props.type || 'submit'}>
            {props.children}
        </button>
    )
}

export default Button
