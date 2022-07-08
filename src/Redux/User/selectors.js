import { createSelector } from "reselect";

const getUsers = (state) => state.users;

export const getUserSelector = createSelector(getUsers, (users) => users);