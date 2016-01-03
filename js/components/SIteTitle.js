import React from 'react';
import ProductStore from "../stores/ProductStore";
export default class SiteTitle extends React.Component {
  componentDidMount() {
    ProductStore.addChangeListener(this.forceUpdate.bind(this))
  }

  handlefilter(){
    ProductStore.toggleShowOnlyLike()
  }

  render() {
    return (
      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img onClick={this.handlefilter} className="title__heart" src={ProductStore.showOnlyLike() ? 'img/heart-liked.svg' : 'img/heart.svg'}/>
      </div>
    );
  }
}