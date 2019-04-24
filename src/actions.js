import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT
} from './constants'


export const addToCart = (payload) => ({ type: ADD_TO_CART, payload: payload.price, product: payload.product })

export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload: payload.price, product: payload.product, idx: payload.idx })

export const checkout = () => ({ type: CHECKOUT })
