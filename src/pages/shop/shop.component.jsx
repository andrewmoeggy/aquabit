import React, { Component } from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_DATA
    }
  }
  render() {

    const { collection } = this.state;
    return (
      <div className='shop-page'>
        <h1>Shop</h1>
        {collection.map(({ title, id, ...otherItemData }, i) => {
          return <CollectionPreview title={title} otherItemData={otherItemData} key={id} />
        })
        }
      </div>
    );
  }
}

export default ShopPage;