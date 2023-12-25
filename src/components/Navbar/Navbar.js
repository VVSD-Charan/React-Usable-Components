import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars,FaCaretDown, FaLandmark } from 'react-icons/fa';
import Dropdown from './Dropdown.js';
import Button from './Button.js';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>

        {/* Navbar logo  */}
        <Link to='/' className='navbar-logo'>
          Company Name
        </Link>

        {/* Toggle button  */}
        <div className='menu-icon' onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </div>

        {/* Navbar items  */}
        <ul className={click? 'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>

            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Services <i><FaCaretDown/></i></Link>
                {dropdown && <Dropdown/>}
            </li>

            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
            </li>

            <li className='nav-item'>
                <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>Signup</Link>
            </li>
        </ul>

        <Button/>

      </nav>
    </>
  );
}

export default Navbar;
