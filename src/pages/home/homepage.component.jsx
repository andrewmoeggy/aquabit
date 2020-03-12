import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './homepage.styles.scss';
import homeHero from '../../assests/homeHero.jpg'
import Hero from '../../components/hero/hero.component';



const Home = () => {
  return (
    <div class='homepage'>
      <header>
        <nav >
          <ul>
            <Link to='/about'>About</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/third'>Third</Link>
            <Link to='/'>Home</Link>

          </ul>
        </nav>
      </header>
      <Hero backgroundImg={homeHero} heading={'Welcome to Aquabit'} textColor={'#fff'} />
    </div>
  );
}

export default withRouter(Home);