import React, {useState} from 'react';
import './ShoppingMenu.scss';
import items from './MenuData';
import MenuItems from './MenuItems';

const allCategories = [...new Set(items.map((item) => item.category))];
const startItems = items.filter((item) => item.category === 'Burgers');

function ShoppingMenu(props) {

    const [value, setValue] = useState('Burgers');
    const [menuItems, setMenuItems] = useState(startItems);

    const filterItems = (category) => {
        console.log(category);
        if (category === value)
            return;
        setValue(category);

        const newItems = items.filter((item) => item.category === category);
        console.log(newItems)
        setMenuItems(newItems);
    }//TODO finishe this func and MenuItems

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
                        {
                            allCategories.map((item, index) => {
                                console.log(item + ' ' + index);
                                return(
                                    <button
                                        key={index}
                                        onClick={() => filterItems(item)}
                                        className={item === value ? 'active-btn' : 'category-btn'}
                                    >
                                        {item}
                                    </button>
                                );
                            })
                        }
                       <MenuItems items={menuItems} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingMenu;