import React from 'react';
import './button.styles.scss';

const Button = ({ buttonText }) => {
  return (
    <button className='button'> {buttonText}</button >
  );
}

export default Button;