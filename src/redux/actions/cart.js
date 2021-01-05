import { ADD_PIZZA_CART, RESET_CART, REMOVE_CART_ITEM, MINUS_CART_ITEM, PLUS_CART_ITEM } from "../types"

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: RESET_CART,
});

export const plusCartItem = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id,
});

export const minusCartItem = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id,
});

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
});