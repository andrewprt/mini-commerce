import {
    ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT
} from './constants';

const initialPrice = {
    totalPrice: 0,
    cart: []
}

export const editCart = (state = initialPrice, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            const idx = state.cart.findIndex(x => x.id === action.product.id);
            if (idx > -1) {
                state.cart[idx].qty++;
                return Object.assign({}, state,
                    { cart: [...state.cart] },
                    { totalPrice: state.totalPrice + action.payload })
            } else {
                action.product.qty++;
                return Object.assign({}, state,
                    { cart: [...state.cart, action.product] },
                    { totalPrice: state.totalPrice + action.payload })
            }
        case REMOVE_FROM_CART:
            // if (action.product.qty > 1) {
            //     const idx = action.idx;
            //     console.log(action.idx);
            //     console.log(idx);
            //     return Object.assign({}, state,
            //         { cart: [...state.cart.slice(0, idx), { ...state.cart[idx], qty: state.cart[idx].qty - 1 }, ...state.cart.slice(idx + 1)] },
            //         { totalPrice: state.totalPrice - action.payload })
            // } else {
            state.cart.splice(state.cart.findIndex(x => x.id === action.product.id), 1)
            return Object.assign({}, state,
                { cart: [...state.cart] },
                { totalPrice: state.totalPrice - (action.payload * action.product.qty) })
        // }
        case CHECKOUT:
            return Object.assign({}, state,
                { cart: [] },
                { totalPrice: 0 })
        default:
            return state
    }
}

