import EventEmitter from 'events';
import {likeItems} from './LikeStore'
let emitter = new EventEmitter();

function emitChange() {
  emitter.emit("change");
}
// 现在先暂时硬编码，将 `_products` 和所有可用的商品关联起来。
let _products = {
    "jameson-vulc": {
      id: "jameson-vulc",
      name: "Jameson Vulc",
      price: 641.99,
      imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
      gender: "man",
    },
    "marana-x-hook-ups": {
      id: "marana-x-hook-ups",
      name: "Marana X Hook-Up",
      price: 79.99,
      imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
      gender: "man",
    },
    "jameson-e-lite": {
      id: "jameson-e-lite",
      name: "Jameson E-Lite",
      price: 69.99,
      imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
      gender: "man",
    },
    "jameson-e-lite-julian-davidson-4": {
      id: "jameson-e-lite-julian-davidson-4",
      name: "Jameson E-Lite Julian Davidson",
      price: 74.99,
      imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
      gender: "man",
    },
    "scout-womens-6": {
      id: "scout-womens-6",
      name: "Scout Women's",
      imagePath: "img/shoes/scout-womens-6-teal-orig.png",
      price: 59.99,
      gender: "woman",
    },
    "scout-womens-coco-ho-5": {
      id: "scout-womens-coco-ho-5",
      name: "Scout Women's Coco Ho",
      imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
      price: 59.99,
      gender: "woman",
    },
    "jameson-2-womens-8": {
      id: "jameson-2-womens-8",
      name: "Jameson 2 Women's",
      imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
      price: 59.99,
      gender: "woman",
    },
    "corby-womens-2": {
      id: "corby-womens-2",
      name: "Corby Women's",
      imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
      price: 44.99,
      gender: "woman",
    }
}
let _showOnlyLike = false
export default {
  // Reader 函数
  products() {
    // 返回所有的商品
    return _products
  },

  showOnlyLike(){
    return _showOnlyLike
  },

  filteredProducts() {
    // 根据 _showOnlyLike 筛选出过滤后的商品
    let likes = likeItems()
    let _filteredProducts = {}
    for(let id in likes){
      _filteredProducts[id] = _products[id]
    }
    return _filteredProducts
  },

  // 行为
  toggleShowOnlyLike() {
    _showOnlyLike = !_showOnlyLike
    emitChange()
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}