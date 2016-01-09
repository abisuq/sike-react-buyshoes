import React from 'react';
import CartStore, {getCartItem, getCartItems} from '../stores/CartStore';
import {products} from "../stores/ProductStore"

export default class Checkout extends React.Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  }
  counter(){
    let sub = 0;
    let ids = Object.keys(getCartItems());
    for(let i of ids) {
      sub += products()[i].price * getCartItem(i).quantity;
    }
    return sub.toFixed(2);
  }
  render() {
    return (
      <div className="checkout">
        <hr className="checkout__divider" />
        <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
        
        <div className="checkout__line">
          <div className="checkout__line__label">
            Subtotal
          </div>
          <div className="checkout__line__amount">
            {'$' + this.counter()}
          </div>
        </div>
        
        <a className="checkout__button">
          <img className="checkout__button__icon" src="img/cart-icon.svg" />
          <div className="checkout__button__label">
            Checkout
          </div>
        </a>
      </div> 
    );
  }
}