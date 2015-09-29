window.onload = function() {
  makeCartScrollNicely();
}
function makeCartScrollNicely() {
  var cart = document.querySelector('.site__right-sidebar .cart');
  var products = document.querySelector('.site__content .products');
  Ps.initialize(cart);
  Ps.initialize(products);
}