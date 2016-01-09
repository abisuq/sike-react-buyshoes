import AppDispatcher from '../AppDispatcher'
import EventEmitter from 'events'
//import UndoStore from './UndoStore'
let emitter = new EventEmitter()

function emitChange() {
  emitter.emit("change")
}

let _cartItems = {}

AppDispatcher.register((action) => {
  let handler = handlers[action.type]
  handler && handler(action)
})

let handlers = {
    addCartItem(action) {
      let {id} = action
      _cartItems[id] = {
          id: id,
          quantity: 1
      }
      emitChange()
    },

    removeCartItem(action) {
      let {id} = action
      delete _cartItems[id]
      emitChange()
    },

    updateCartItemQuantity(action) {
      let {id, quantity} = action
      quantity > 0 ? _cartItems[id].quantity = quantity : delete _cartItems[id]
      emitChange()
    },

    undoShoppingCart(action) {
      let {cartItems} = action
      _cartItems = cartItems
      emitChange()
    }
}


export default {
  getCartItems() {
		return _cartItems;
	},

  cartItems() {
		return _cartItems;
	},

  getCartItem(productId){
    return _cartItems[productId];
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}
