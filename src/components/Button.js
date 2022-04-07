import React from 'react';
import './Button.sass'

function Button(props) {
    return (
        <>
            <button className='btn'>{props.name}</button>
        </>
    );
}

export default Button;