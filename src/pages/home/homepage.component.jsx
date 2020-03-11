import React from 'react';
import './homepage.styles.scss';
import homeHero from '../../assests/homeHero.jpg'
import Hero from '../../components/hero/hero.component';

const Home = () => {
  return (
    <div class='homepage'>
      <header>
        <nav >
          <ul>
            <li>hey</li>
            <li>thing</li>
            <li>sbout</li>
          </ul>
        </nav>
      </header>
      <Hero backgroundImg={homeHero} heading={'Welcome to Aquabit'} textColor={'#fff'} />
    </div>
  );
}

export default Home;