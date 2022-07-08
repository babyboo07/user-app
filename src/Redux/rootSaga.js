import { all, fork } from "redux-saga/effects";
import AddressSaga from "./Address/saga";
import AuthSaga from "./auth/saga";
import UserSaga from "./User/saga";
import CateSaga from "./category/saga";
import ProductSaga from "./product/saga";
import CartSaga from "./cart/saga";
import PurchasedProSaga from "./PurchasedProduct/saga";
import ProductLoversSaga from "./productLover/saga";

export function* rootSaga(){
    yield all([
        fork(AddressSaga),
        fork(AuthSaga),
        fork(UserSaga),
        fork(CateSaga),
        fork(ProductSaga),
        fork(CartSaga),
        fork(PurchasedProSaga),
        fork(ProductLoversSaga),
    ]);
}