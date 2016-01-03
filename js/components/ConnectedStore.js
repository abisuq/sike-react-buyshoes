import React from 'react';
export default class ConnectedStore extends React.Component {
  componentDidMount() {
    this.props.store.addChangeListener(this.forceUpdate.bind(this));
  }
  render() {
    let {store, propNames} = this.props;
    let storeProps = {};
    for(let i of propNames){
      storeProps[i] = Object.prototype.toString.call(store[i])=== '[object Function]' ? store[i]() : store[i]
    }
    let contentRenderFunction = this.props.children;
    return contentRenderFunction(storeProps);
  }
}