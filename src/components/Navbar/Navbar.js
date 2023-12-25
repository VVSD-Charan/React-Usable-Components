import React, { useState } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { DropDown } from './Dropdown.js';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Company Name
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
