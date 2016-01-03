import EventEmitter from 'events';
let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}

let _likeItems = {
  
};

export default {

  // Reader methods
  getLikeItems() {
		return _likeItems;
	},

  likeItems() {
		return _likeItems;
	},

  getLikeItem(productId){
    return _likeItems[productId];
  },

  // Writer methods. These are the "actions".
  addLikeItem(productId) {
    _likeItems[productId] = {
      id: productId
    }
    emitChange();
	},

  removeLikeItem(productId) {
    delete _likeItems[productId];
    emitChange();
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}
