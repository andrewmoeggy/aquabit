import React from 'react';

const CollectionPreview = ({ title, otherItemData }) => {
  const { items } = otherItemData;
  console.log(items)

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items.filter((item, i) => i < 4).map((item) => {
            return <div key={item.id}>{item.name}</div>
          })
        }
      </div>
    </div>
  );
}

export default CollectionPreview;