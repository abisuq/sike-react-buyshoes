import React from 'react'
import Ps from 'perfect-scrollbar'
import cartStore from '../stores/CartStore'
import CartItem from './CartItem'
import connect from './connect'
import {lastHistoryItem} from '../stores/UndoStore'
import {undoShoppingCart} from '../actions/action'

class CartView extends React.Component {
  componentDidMount() {
    let cartBox = React.findDOMNode(this.refs.cartBox)
    Ps.initialize(cartBox)
  }
  undo() {
    let cartItems = lastHistoryItem();
    undoShoppingCart(cartItems);
  }
  render() {
    let {cartItems} = this.props
    let cartItemNode = []
    for(let i in cartItems){
      cartItemNode.push(
        <CartItem cartItem={cartItems[i]} key={i}/>
      )
    }
    return (
     <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <h3 className="cart__undo"><a onClick={this.undo}>undo</a></h3>
        <div className="cart__content" ref="cartBox">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {cartItemNode}
        </div>
      </div>
    )
  }
}
@connect(cartStore, 'cartItems')
export default class ConnectedCart extends CartView {}