import React from 'react';
import './MenuItems.scss';

function MenuItems( {items} ) {
    return (
        <>
            <div className="menu-container">
                {
                    items.map((menuItems) => {
                        const { id, title, category, price, image, description } = items;
                    })
                }
            </div>
        </>
    );
}

export default MenuItems;