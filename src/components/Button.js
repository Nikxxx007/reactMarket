import React from 'react';
import './Button.sass'

function Button(props) {
    return (
        <>
            <button style={props.btnStyle} className='btn'>{props.name}</button>
        </>
    );
}

export default Button;