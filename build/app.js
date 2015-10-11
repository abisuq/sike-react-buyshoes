// Data [Products]
"use strict";

var data_products = {

  "jameson-vulc": {
    id: "jameson-vulc",
    name: "Jameson Vulc",
    price: 64.99,
    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
    gender: "man"
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man"
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man"
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man"
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman"
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman"
  }
};
//Data [CartItems]
var data_cartItems = {

  "jameson-vulc": {
    id: "jameson-vulc",
    quantity: 1
  },

  "marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    quantity: 2
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    quantity: 2
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    quantity: 1
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    quantity: 1
  }

};
//APP component
var App = React.createClass({
  displayName: "App",

  componentDidMount: function componentDidMount() {
    var toggle = React.findDOMNode(this.refs.toggle);
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("js-show-right-sidebar");
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "site" },
      React.createElement(SiteBg, null),
      React.createElement(
        "div",
        { className: "site__main" },
        React.createElement(
          "div",
          { className: "site__left-sidebar" },
          React.createElement(SiteTitle, null)
        ),
        React.createElement(
          "div",
          { className: "site__content" },
          React.createElement(Products, null)
        )
      ),
      React.createElement(
        "div",
        { className: "site__right-sidebar" },
        React.createElement(Cart, null),
        React.createElement(Checkout, null)
      ),
      React.createElement(
        "a",
        { className: "site__right-sidebar-toggle", ref: "toggle" },
        React.createElement("img", { src: "img/arrow-icon.svg" })
      )
    );
  }
});
//The SiteBg component
var SiteBg = React.createClass({
  displayName: "SiteBg",

  render: function render() {
    return React.createElement(
      "div",
      { className: "bg" },
      React.createElement("div", { className: "bg__img" })
    );
  }
});
//The SiteTitle component.
var SiteTitle = React.createClass({
  displayName: "SiteTitle",

  render: function render() {
    return React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h2",
        null,
        "Buy Me Shoes"
      ),
      React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
    );
  }
});
//The Products component.
var Products = React.createClass({
  displayName: "Products",

  render: function render() {
    var productNode = [];
    for (var i in data_products) {
      productNode.push(React.createElement(Product, { product: data_products[i], key: i }));
    }
    return React.createElement(
      "div",
      { className: "products" },
      productNode
    );
  }
});
//The Product component
var Product = React.createClass({
  displayName: "Product",

  renderAdd: function renderAdd() {
    var item = data_cartItems[this.props.product.id];
    if (item) {
      return React.createElement(QuantityControl, { item: item, variant: "gray" });
    } else {
      return React.createElement(
        "a",
        { className: "product__add" },
        React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
      );
    }
  },
  render: function render() {
    //获取组件 prop 的值
    var _props$product = this.props.product;
    var name = _props$product.name;
    var price = _props$product.price;
    var imagePath = _props$product.imagePath;

    return React.createElement(
      "div",
      { className: "product" },
      React.createElement(
        "div",
        { className: "product__display" },
        React.createElement(
          "div",
          { className: "product__img-wrapper" },
          React.createElement("img", { className: "product__img", src: imagePath })
        ),
        this.renderAdd(),
        React.createElement(
          "div",
          { className: "product__price" },
          '$' + price
        )
      ),
      React.createElement(
        "div",
        { className: "product__description" },
        React.createElement(
          "div",
          { className: "product__name" },
          name
        ),
        React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
      )
    );
  }
});
//The Cart component.
var Cart = React.createClass({
  displayName: "Cart",

  componentDidMount: function componentDidMount() {
    var cartBox = React.findDOMNode(this.refs.cartBox);
    Ps.initialize(cartBox);
  },
  render: function render() {
    var cartItemNode = [];
    for (var i in data_cartItems) {
      cartItemNode.push(React.createElement(CartItem, { cartItem: data_cartItems[i], key: i }));
    }
    return React.createElement(
      "div",
      { className: "cart" },
      React.createElement(
        "h3",
        { className: "cart__title" },
        "Shopping Cart"
      ),
      React.createElement(
        "div",
        { className: "cart__content", ref: "cartBox" },
        React.createElement(
          "h3",
          { className: "cart__title cart__title--spacer" },
          "Shopping Cart"
        ),
        cartItemNode
      ),
      " "
    );
  }
});
//The CartItem component.
var CartItem = React.createClass({
  displayName: "CartItem",

  render: function render() {
    var _props$cartItem = this.props.cartItem;
    var id = _props$cartItem.id;
    var quantity = _props$cartItem.quantity;
    var _data_products$id = data_products[id];
    var name = _data_products$id.name;
    var price = _data_products$id.price;
    var imagePath = _data_products$id.imagePath;

    return React.createElement(
      "div",
      { className: "cart-item" },
      React.createElement(
        "div",
        { className: "cart-item__top-part" },
        React.createElement(
          "div",
          { className: "cart-item__image" },
          React.createElement("img", { src: imagePath })
        ),
        React.createElement(
          "div",
          { className: "cart-item__top-part__middle" },
          React.createElement(
            "div",
            { className: "cart-item__title" },
            name
          ),
          React.createElement(
            "div",
            { className: "cart-item__price" },
            '$' + price + (quantity > 1 ? ' x ' + quantity : '')
          )
        ),
        React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
      ),
      React.createElement(
        "div",
        { className: "cart-item__qty" },
        React.createElement(QuantityControl, { item: this.props.cartItem })
      )
    );
  }
});
// The QuantityControl component.
var QuantityControl = React.createClass({
  displayName: "QuantityControl",

  render: function render() {
    var _props$item = this.props.item;
    var id = _props$item.id;
    var quantity = _props$item.quantity;
    var variant = this.props.variant;
    return React.createElement(
      "div",
      { className: "adjust-qty adjust-qty--" + variant },
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "-"
      ),
      React.createElement(
        "div",
        { className: "adjust-qty__number" },
        quantity
      ),
      React.createElement(
        "a",
        { className: "adjust-qty__button" },
        "+"
      )
    );
  }
});

//The Checkout component.
var Checkout = React.createClass({
  displayName: "Checkout",

  render: function render() {
    return React.createElement(
      "div",
      { className: "checkout" },
      React.createElement("hr", { className: "checkout__divider" }),
      React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__label" },
          "Discount"
        ),
        React.createElement(
          "div",
          { className: "checkout__line__amount" },
          "-$90"
        )
      ),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__label" },
          "Subtotal"
        ),
        React.createElement(
          "div",
          { className: "checkout__line__amount checkout__line__amount--strikeout" },
          "$450"
        )
      ),
      React.createElement(
        "div",
        { className: "checkout__line" },
        React.createElement(
          "div",
          { className: "checkout__line__amount checkout__line__amount--omg-savings" },
          "$360"
        )
      ),
      React.createElement(
        "a",
        { className: "checkout__button" },
        React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
        React.createElement(
          "div",
          { className: "checkout__button__label" },
          "Checkout"
        )
      )
    );
  }
});

window.onload = function () {
  React.render(React.createElement(App, null), document.body);
};
/* cart__content */
