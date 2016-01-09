import AppDispatcher from '../AppDispatcher'
import EventEmitter from 'events'
import {cartItems} from './CartStore'
import _ from 'lodash'
console.log(cartItems)
let emitter = new EventEmitter()

function emitChange() {
  emitter.emit("change")
}

// cartItem 的数组
let _history = []

AppDispatcher.register((action) => {
    let handler = handlers[action.type]
    handler && handler(action)
})

let handlers = {
  addCartItem(action) {
    _history.push(_.cloneDeep(cartItems()))
    emitChange()
  },

  removeCartItem(action) {
    _history.push(_.cloneDeep(cartItems()))
    emitChange()
  }
}

export default {
  lastHistoryItem() {
    if(_history.length){
      return _history.pop()
    }
  },
  addChangeListener(callback) {
    emitter.addListener("change", callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change", callback)
  }
} 
