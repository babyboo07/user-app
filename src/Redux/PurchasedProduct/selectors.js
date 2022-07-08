import { createSelector } from "reselect";

const getPurchasedpro = (state) => state.purchasedpro;

export const getPurchasedProSelector = createSelector(getPurchasedpro, (PurchasedProduct) => PurchasedProduct);