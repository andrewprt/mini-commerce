import {
    ADD_TO_CART,
    REMOVE_FROM_CART
    // ,
    // LOGIN_LOGOUT
} from './constants'


export const addToCart = (payload) => ({ type: ADD_TO_CART, payload: payload.price, product: payload.product })

export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload: payload.price, product: payload.product, idx: payload.idx })

// export const loginLogout = (payload) => ({ type: LOGIN_LOGOUT, payload: payload })
