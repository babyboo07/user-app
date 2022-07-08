import { createSelector } from "reselect";

const getCates = (state) => state.cate;

export const getCateSelector = createSelector(getCates, (category) => category);