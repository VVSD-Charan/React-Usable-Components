import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Company Name
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
