import {
    ADD_TO_CART, REMOVE_FROM_CART
    // , LOGIN_LOGOUT
} from './constants';

const initialPrice = {
    totalPrice: 0,
    cart: []
}

export const editCart = (state = initialPrice, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state,
                { cart: [...state.cart, action.product] },
                { totalPrice: state.totalPrice + action.payload })
        // { totalPrice: state.cart.reduce((total, value) => { return total + value.price }, 0) })
        case REMOVE_FROM_CART:
            state.cart.splice(state.cart.findIndex(x => x.id === action.product), 1)
            return Object.assign({}, state,
                { cart: [...state.cart] },
                { totalPrice: state.totalPrice - action.payload })
        default:
            return state
    }
}

// const authentication = {
//     loggedIn: "bababa"
// }

// export const logging = (state = authentication, action = {}) => {
//     switch (action.type) {
//         case LOGIN_LOGOUT:
//             console.log(action.payload, "testtttttttttt");
//             return Object.assign({}, state,
//                 { loggedIn: "falsee" })
//         default:
//             return state
//     }
// }