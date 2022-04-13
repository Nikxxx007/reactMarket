import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import Logo from '../assets/5e865e09d8efa341ab76b5e7_Logo.svg'
import Button from './Button'
import './Nabvar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    const buttonStyle = {
        padding: '0 0',
        margin: '0 0',
        height: '55px',
        width:'55px'}

    return (
        <>
            <div className='navbar'>
                 <div className='navbar-container'>
                     <Link to='/' className='navbar-logo'>
                        <img className='navbar-icon' alt='logo' src={Logo} />
                     </Link>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                             <Link to='/' className='nav-links'>
                                 Home
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/Order' className='nav-links'>
                                 Order
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/Company' className='nav-links'>
                                 Company
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/FAQ' className='nav-links'>
                                 FAQ
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/Contact' className='nav-links'>
                                 Contact
                             </Link>
                         </li>
                     </ul>
                     <div className="shop-icon">
                         <Button btnStyle={buttonStyle} name={<FaShoppingCart />} />
                     </div>
                     <div className="menu-icon" onClick={handleClick}>
                         {click ? <FaTimes /> : <GiHamburgerMenu />}
                     </div>
                 </div>
            </div>
        </>
    );
}

export default Navbar;