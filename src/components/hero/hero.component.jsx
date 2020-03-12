import React from 'react';
import './hero.styles.scss';

import Button from '../button/button.component';

const Hero = ({ backgroundImg, heading, textColor }) => {
  return (
    <main className="hero-main" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.0)),url(${backgroundImg})` }}>
      <h1 className="hero-heading" style={{ color: `${textColor}` }}>{heading}</h1>
      <Button buttonText={'Browse our Products'} />
    </main>
  );
}

export default Hero;