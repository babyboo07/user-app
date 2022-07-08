import { combineReducers } from "redux";

import addressReducer from "./Address/reducers";
import authReducer from "./auth/reducers";
import userReducers from "./User/reducers";
import cateReducers from "./category/reducers";
import productReducers from "./product/reducers";
import cartReducers from "./cart/reducers";
import purchasedproReducers from "./PurchasedProduct/reducers";
import productloversReducers from "./productLover/reducers";

const rootReducer = combineReducers({
  address: addressReducer,
  auth: authReducer,
  users: userReducers,
  cate: cateReducers,
  product: productReducers,
  cart: cartReducers,
  purchasedpro: purchasedproReducers,
  productlovers: productloversReducers,
});

export default rootReducer;
