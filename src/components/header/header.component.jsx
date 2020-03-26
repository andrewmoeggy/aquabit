import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to='/' className='logo'>
          <div></div>
        </Link>
        <div className="header-links">
          <Link to='/shop' className='header-links--item'>SHOP</Link>
          <Link to='/shop' className='header-links--item'>ABOUT</Link>
          {currentUser ?
            <div className='header-links--item' onClick={() => auth.signOut()}>Sign Out</div>
            :
            <Link className='header-links--item' to='/signin'>Sign In</Link>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;