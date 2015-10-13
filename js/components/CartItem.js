const React = require("react");
const QuantityControl = require('./QuantityControl');
const Data = require('./Data');
let data_products = Data.data_products;
//The CartItem component.
let CartItem = React.createClass({
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
          <img className="cart-item__trash" src="img/trash-icon.svg" />
        </div>
        <div className="cart-item__qty">
            <QuantityControl item={this.props.cartItem}/>
        </div>
      </div>
    );
  }
})

module.exports = CartItem;