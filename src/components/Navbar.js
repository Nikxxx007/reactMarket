import React, { useState } from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/5e865e09d8efa341ab76b5e7_Logo.svg'
import Button from './Button'
import './Nabvar.css'
import CartMenu from './CartMenu'

function IsActive(to) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return match;
}

function Navbar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => {
      setClick(false);
    }
    
    const handleClick = () => setClick(!click);

    const [amount, setAmount] = useState(0);

    function handleProducts(count) {
        amount += count;
        setAmount(amount);
    }

    const buttonStyle = {
        padding: '0 0',
        margin: '0 0',
        height: '55px',
        width:'55px'
    }

    return (
        <>
            <div className='navbar'>
                 <div className='navbar-container'>
                     <Link to='/' className='navbar-logo'>
                        <img className='navbar-icon' alt='logo' src={Logo} />
                     </Link>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item' onClick={closeMobileMenu}>
                             <Link to='/' className={IsActive('/') ? 'nav-links active' : 'nav-links'}>
                                 Home
                             </Link>
                         </li>
                         <li className='nav-item' onClick={closeMobileMenu}>
                             <Link to='/Order' className={IsActive('/Order') ? 'nav-links active' : 'nav-links'}>
                                 Order
                             </Link>
                         </li>
                         <li className='nav-item' onClick={closeMobileMenu}>
                             <Link to='/Company' className={IsActive('/Company') ? 'nav-links active' : 'nav-links'}>
                                 Company
                             </Link>
                         </li>
                         <li className='nav-item' onClick={closeMobileMenu}>
                             <Link to='/FAQ' className={IsActive('/FAQ') ? 'nav-links active' : 'nav-links'}>
                                 FAQ
                             </Link>
                         </li>
                         <li className='nav-item' onClick={closeMobileMenu}>
                             <Link to='/Contact' className={IsActive('/Contact') ? 'nav-links active' : 'nav-links'}>
                                 Contact
                             </Link>
                         </li>
                     </ul>
                     <div className="shop-icon">
                         <Button btnStyle={buttonStyle} name={<FaShoppingCart />} />
                     </div>
                     <div className="shop-amount">
                         <p>{amount}</p>
                     </div>
                     <div className="menu-icon" onClick={handleClick}>
                         {click ? <FaTimes /> : <GiHamburgerMenu />}
                     </div>
                 </div>
            </div>
            <CartMenu></CartMenu>
        </>
    );
}

export default Navbar;