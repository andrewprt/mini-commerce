import {
    ADD_TO_CART
} from './constants';

const initialPrice = {
    totalPrice: 0,
    cart: []
}

export const addPrice = (state = initialPrice, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state,
                { cart: [...state.cart, action.product] },
                { totalPrice: state.totalPrice + action.payload })
        // { totalPrice: state.cart.reduce((total, value) => { return total + value.price }, 0) })
        default:
            return state
    }
}