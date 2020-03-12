import React from 'react';
import './homepage.styles.scss';
import homeHero from '../../assests/homeHero.jpg'
import Hero from '../../components/hero/hero.component';

const AboutTest = () => {
  return (
    <div className="">about</div>
  )
}

const ShopTest = () => {
  return (
    <div className="">Shop</div>
  )
}

const ThirdPage = () => {
  return (
    <div className="">ThirdPage</div>
  )
}

const Home = () => {
  return (
    <div class='homepage'>
      <header>
        <nav >
          <ul>
            <li>about</li>
            <li>shop</li>
            <li>third</li>
          </ul>
        </nav>
      </header>
      <Hero backgroundImg={homeHero} heading={'Welcome to Aquabit'} textColor={'#fff'} />
    </div>
  );
}

export default Home;