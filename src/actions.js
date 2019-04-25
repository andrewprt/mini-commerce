import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHECKOUT,
    SEARCH
} from './constants'

//flow : from components file to this file, after this will go to reducers.js
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload: payload.price, product: payload.product })

export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, product: payload.product, idx: payload.idx })

export const search = (payload) => ({ type: SEARCH, search: payload.search })

export const checkout = () => ({ type: CHECKOUT })
