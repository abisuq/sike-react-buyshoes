import React from 'react';

export default class QuantityControl extends React.Component {
  render() {
    let {id, quantity} = this.props.item,
      variant = this.props.variant;
    return (
      <div className={"adjust-qty adjust-qty--" + variant}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    );
  }
}
