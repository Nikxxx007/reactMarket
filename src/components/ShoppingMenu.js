import React from 'react';
import './ShoppingMenu.scss';
// import Button from '../Button'
import items from './MenuData'

const allCategories = new Set(items.map((item) => item.category));
console.log(allCategories);

function ShoppingMenu(props) {



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
                        <button> Burgers</button>
                        <button>Slides</button>
                        <button>Drinks</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingMenu;