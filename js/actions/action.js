import AppDispatcher from '../AppDispatcher'

export default {
    addCartItem(id) {
        AppDispatcher.dispatch({
            type: 'addCartItem',
            id: id
        })
    },

    removeCartItem(id) {
        AppDispatcher.dispatch({
            type: 'removeCartItem',
            id: id
        })
    },

    updateCartItemQuantity(id, quantity) {
        AppDispatcher.dispatch({
            type: 'updateCartItemQuantity',
            id: id,
            quantity: quantity
        })
    },

    undoShoppingCart(cartItems) {
        AppDispatcher.dispatch({
            type: 'undoShoppingCart',
            cartItems: cartItems
        })
    }
}