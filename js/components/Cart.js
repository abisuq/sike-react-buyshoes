import React from 'react';
import Ps from 'perfect-scrollbar';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  componentDidMount() {
    let cartBox = React.findDOMNode(this.refs.cartBox);
    Ps.initialize(cartBox);
  }
  render() {
    let cartItemNode = [];
    let {products, cartItems} = this.props;
    for(let i in cartItems){
      cartItemNode.push(
        <CartItem cartItem={cartItems[i]} products={products} key={i}/>
      );
    }
    return (
      <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div className="cart__content" ref="cartBox">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {cartItemNode}
        </div>
      </div>
    );
  }
}