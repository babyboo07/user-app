import { createSelector } from "reselect";

const getCarts = (state) => {
    return state.cart;
}


export const getCartSelector = createSelector(getCarts, (cart) => cart);