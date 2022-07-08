import { createSelector } from "reselect";

const getProductLovers = (state) => {
    return state.productlovers;
}

export const getProductLoverSelector = createSelector(getProductLovers, (productLover) => productLover);