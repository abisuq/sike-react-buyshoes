import React from 'react';
import Product from './Product';

export default class Products extends React.Component {
  render() {
    let products = this.props.products;
    let cartItems = this.props.cartItems;
    let productNode = [];
    for(let i in products){
      productNode.push(
        <Product product={products[i]} cartItems={cartItems} key={i}/>
      );
    }
    return (
      <div className="products">
        {productNode}
      </div>
    )
  }
}

