import React from 'react';
import QuantityControl from './QuantityControl';
import CartStore from '../stores/CartStore';
import LikeStore from '../stores/LikeStore';
const {getLikeItems, addLikeItem, removeLikeItem} = LikeStore;
const {getCartItem, addCartItem} = CartStore;
//The Product component
export default class Product extends React.Component {
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this))
    LikeStore.addChangeListener(this.forceUpdate.bind(this))
  }
  
  handleAdd2Cart(productId){
    addCartItem(productId)
  }
  
  handleLike(productId){
    getLikeItems()[productId] ? removeLikeItem(productId) : addLikeItem(productId)
  }

  renderAdd() {
    let product = this.props.product
    let item  = this.props.cartItems[product.id]
    if(item){
      return (
        <QuantityControl item={item} variant="gray"/>
      )
    }else{
      return (
        <a className="product__add" onClick={this.handleAdd2Cart.bind(this, product.id)}>
          <img className="product__add__icon" src="img/cart-icon.svg" />
        </a>
      )
    }
  }
  render() {
    let {name,price,imagePath,id} = this.props.product
    let liked = this.props.liked 
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
          <img className="product__heart" onClick = {this.handleLike.bind(this, id)} src={liked ? 'img/heart-liked.svg' : 'img/heart.svg'} />
        </div>
      </div>
    );
  }
}
