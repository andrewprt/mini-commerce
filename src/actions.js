import {
    ADD_TO_CART
} from './constants'


export const setTotalPrice = (payload) => ({ type: ADD_TO_CART, payload: payload.price, product: payload.product })