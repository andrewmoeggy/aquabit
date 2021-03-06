import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, otherItemData }) => {
  const { items } = otherItemData;
  console.log(items)

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items
            .filter((item, i) => i < 4)
            .map(({ id, ...otherItemProps }) => {
              return <CollectionItem key={id} {...otherItemProps} />
            })
        }
      </div>
    </div>
  );
}

export default CollectionPreview;