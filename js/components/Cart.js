const React = require("react");
const Ps = require("perfect-scrollbar");
const CartItem = require("./CartItem");
const Data = require('./Data');
let data_cartItems = Data.data_cartItems;
//The Cart component.
let Cart = React.createClass({
  componentDidMount() {
    let cartBox = React.findDOMNode(this.refs.cartBox);
    Ps.initialize(cartBox);
  },
  render() {
    var cartItemNode = [];
    for(let i in data_cartItems){
      cartItemNode.push(
        <CartItem cartItem={data_cartItems[i]} key={i}/>
      );
    }
    return (
      <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div className="cart__content" ref="cartBox">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {cartItemNode}
        </div> {/* cart__content */}
      </div>
    );
  }
});

module.exports = Cart;