import React from 'react'
import Product from './Product'
import ProductStore from "../stores/ProductStore"
import LikeStore from '../stores/LikeStore'
import CartStore from '../stores/CartStore'
import connect from './connect'
let {getLikeItems} = LikeStore

class ProductsView extends React.Component {
  componentDidMount() {
    LikeStore.addChangeListener(this.forceUpdate.bind(this))
    CartStore.addChangeListener(this.forceUpdate.bind(this))
    ProductStore.addChangeListener(this.forceUpdate.bind(this))
  }
  render() {
    let productNode = [], {cartItems, likeItems, products, filteredProducts, showOnlyLike} = this.props;
    showOnlyLike && (products = filteredProducts)
    for(let id in products){
      let liked = likeItems[id] ? true : false
      let product = products[id]
      productNode.push(
        <Product product={product} cartItems={cartItems} liked={liked} key={id}/>
      )
    }
    return (
      <div className="products">
        {productNode}
      </div>
    )
  }
}

@connect(CartStore, 'cartItems')
@connect(LikeStore, 'likeItems')
@connect(ProductStore, 'products','filteredProducts', 'showOnlyLike')
export default class ConnectedProducts extends ProductsView {}