import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to='/' className='logo'>
          <div></div>
        </Link>
        <div className="header-links">
          <Link to='/shop' className='header-links--item'>SHOP</Link>
          <Link to='/shop' className='header-links--item'>ABOUT</Link>
          <Link to='/shop' className='header-links--item'>CONTACT</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;