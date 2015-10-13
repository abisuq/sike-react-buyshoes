const React = require("react");
const Data = require('./Data');
const Product = require("./Product");
let data_products = Data.data_products;
//The Products component.
let Products = React.createClass({
  render() {
    var productNode = [];
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
});

module.exports = Products;