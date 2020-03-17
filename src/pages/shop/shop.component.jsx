import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

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
        <h1>hey</h1>
        {collection.map((item, i) => {
          console.log(item);
          return <div key={i}> {item.items.map((i) => {
            return <div>{i.imageUrl}</div>
          })} </div>
        })
        }
      </div>
    );
  }
}

export default ShopPage;