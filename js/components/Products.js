import React from 'react';
import Product from './Product';
import data_products from "../Data.js";
export default class Products extends React.Component {
  render() {
    let productNode = [];
    for(let i in data_products){
      productNode.push(
        <Product product={data_products[i]} key={i}/>
      );
    }
    return (
      <div className="products">
        {productNode}
      </div>
    )
  }
}

