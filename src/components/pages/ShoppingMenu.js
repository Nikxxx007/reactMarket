import React from 'react';
import './ShoppingMenu.scss';
// import Button from '../Button'

function ShoppingMenu(props) {

    const [disable, setDisable] = React.useState(false);

    const enableButton = (buttonStat) => {
        if (buttonStat)
            return ;
        setDisable(!disable)
    }

    return (
        <>
            <div className="shopping-section">
                <div className="shopping-container container">
                    <div className="title-section">
                        <h2>
                            Browse our menu
                        </h2>
                        <p>Use our menu to place an order online? or phone out store to place a pickup order. Fash and
                        fresh food.</p>
                    </div>
                    <div className="menu-section">
                        <button className={disable ? 'disable' : 'active'} onClick={enableButton(true)}>Burgers</button>
                        <button className={disable ? 'disable' : 'active'} onClick={enableButton} >Slides</button>
                        <button className={disable ? 'disable' : 'active'} onClick={enableButton} >Drinks</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingMenu;