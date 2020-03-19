import React from 'react';
import { withRouter } from 'react-router-dom';
import './homepage.styles.scss';
import homeHero from '../../assests/homeHero.jpg'
import Hero from '../../components/hero/hero.component';



const Home = () => {
  return (
    <div className='homepage'>
      <Hero backgroundImg={homeHero} heading={'Welcome to Aquabit'} textColor={'#fff'} />
    </div>
  );
}

export default withRouter(Home);