import { createSelector } from "reselect";

const getProduct = (state) => state.product;

export const getProductSelector = createSelector(getProduct, (product) => product);