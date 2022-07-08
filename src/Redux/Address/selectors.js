import { createSelector } from "reselect";

const getALlAddress = (state) => state.address;

export const getAddressSelector = createSelector(getALlAddress, (address) => address);