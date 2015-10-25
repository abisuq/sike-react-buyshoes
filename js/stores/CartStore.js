import EventEmitter from 'events';
// import products from 'Data';
let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _cartItems = {
  
};

export default {
  // Reader methods
  getCartItems() {
		return _cartItems;
	},
  getCartItem(productId){
    return _cartItems[productId];
  },
  // Writer methods. These are the "actions".
  addCartItem(productId) {
    _cartItems[productId] = {
      id: productId,
      quantity: 1
    }
    emitChange();
	},
  removeCartItem(productId) {
    delete _cartItems[productId];
    emitChange();
  },
  updateCartItemQuantity(id, quantity){
    quantity > 0 ? _cartItems[id].quantity = quantity : delete _cartItems[id];
    emitChange();
  },
  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}
