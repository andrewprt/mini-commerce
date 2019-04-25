import {
    ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT, SEARCH
} from './constants';

const states = {
    totalPrice: 0,
    cart: []
}

export const editCart = (state = states, action = {}) => {
    switch (action.type) {
        //add to cart will add 1 qty to a product. This will join same products as 1, increases its qty
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

        //remove from cart will delete a product from cart, no matter how many qty it has    
        case REMOVE_FROM_CART:
            state.cart.splice(state.cart.findIndex(x => x.id === action.product.id), 1);
            return Object.assign({}, state,
                { cart: [...state.cart] },
                { totalPrice: state.totalPrice - (action.product.price * action.product.qty) })

        //checkout will just reset cart and totalPrice to 0, as if we do checkout in a real e-commerce
        case CHECKOUT:
            return Object.assign({}, state,
                { cart: [] },
                { totalPrice: 0 })
        default:
            return state
    }
}

const searchField = {
    searchField: ''
}

export const searchProduct = (state = searchField, action = {}) => {
    switch (action.type) {
        //set searchField state
        case SEARCH:
            return Object.assign({}, state,
                { searchField: action.search })
        default:
            return state
    }
}

