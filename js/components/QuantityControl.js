import React from 'react';
import {updateCartItemQuantity} from '../stores/CartStore';
export default class QuantityControl extends React.Component {
  onClick(id, quantity){
    updateCartItemQuantity(id, quantity);
  }
  render() {
    let {id, quantity} = this.props.item,
      variant = this.props.variant;
    return (
      <div className={"adjust-qty adjust-qty--" + variant}>
        <a className="adjust-qty__button" onClick={this.onClick.bind(this, id, quantity-1)}>-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button" onClick={this.onClick.bind(this, id, quantity+1)}>+</a>
      </div>
    );
  }
}
