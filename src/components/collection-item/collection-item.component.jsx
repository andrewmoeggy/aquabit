import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className='collection-item'>
      <div className='item-image' style={{
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <h2 className='collection-item--name'>{name}</h2>
      <h2 className='collection-item--price'>{price}</h2>
    </div>
  );
}

export default CollectionItem;