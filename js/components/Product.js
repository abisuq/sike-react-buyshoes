const React = require("react");
const QuantityControl = require("./QuantityControl");
const Data = require('./Data');
let data_cartItems = Data.data_cartItems;
//The Product component
let Product = React.createClass({
  renderAdd() {
    let item = data_cartItems[this.props.product.id];
    if(item){
      return (
        <QuantityControl item={item} variant="gray"/>
      );
    }else{
      return (
        <a className="product__add">
          <img className="product__add__icon" src="img/cart-icon.svg" />
        </a>
      );
    }
  },
  render() {
    let {name,price,imagePath} = this.props.product;   
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath} />
          </div>
          {this.renderAdd()}
          <div className="product__price">
            {'$' + price}
          </div>
        </div>
        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src="img/heart.svg" />
        </div>
      </div>
    );
  }
});

module.exports = Product;