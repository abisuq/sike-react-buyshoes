import React from 'react';
import QuantityControl from './QuantityControl';
import data_products from '../Data.js';
import {removeCartItem} from '../stores/CartStore';
// const {removeCartItem} = cartStore;
export default class CartItem extends React.Component {
  onClick(id) {
    removeCartItem(id);
  }
  render() {
    let {id, quantity} = this.props.cartItem,
        {name, price, imagePath} = data_products[id];
    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {name}
            </div>
            <div className="cart-item__price">
              {'$' + price + (quantity > 1 ? ' x ' + quantity : '')}
            </div>
          </div>
          <img className="cart-item__trash" src="img/trash-icon.svg" onClick={this.onClick.bind(this, id)}/>
        </div>
        <div className="cart-item__qty">
            <QuantityControl item={this.props.cartItem}/>
        </div>
      </div>
    );
  }
}