import { createSelector } from "reselect";

const getAuth = (state) => state.auth;

export const getAuthSelector = createSelector(getAuth, (auth) => auth);