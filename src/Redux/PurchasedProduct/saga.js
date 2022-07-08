import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch";
import { deleteCart } from "../cart/actions";
import {
  addPurchasedProductFailure,
  addPurchasedProductSuccess,
  ADD_PURCHASED_PRODUCT,
  getAllOrdersFailure,
  getAllOrdersSuccess,
  getPurchasedProductFailure,
  getPurchasedProductSuccess,
  GET_ALL_ORDER,
  GET_PURCHASED_PRODUCT,
} from "./actions";

const addPurchasedPro = (data) => {
  return new SuperFetch().post("/api/purchasedProducts/add", data);
};

const getPurchasedProduct = (data) => {
  return new SuperFetch().get(`/api/purchasedProducts/userid${data.userId}/status${data.status}`);
};

const getall = (data) => {
  return new SuperFetch().get(`/api/purchasedProducts/${data.id}`);
};

function* getAllOrder(data) {
  try {
    const res = yield call(getall, data.payload);
    if (res) {
      yield put(getAllOrdersSuccess(res));
    }
  } catch (e) {
    console.log(e);
    yield put(getAllOrdersFailure());
  }
}

function* getAllPurchasedPro(data) {
  try {
    const res = yield call(getPurchasedProduct, data.payload);
    if (res) {
      yield put(getPurchasedProductSuccess(res));
    }
  } catch (e) {
    console.log(e);
    yield put(getPurchasedProductFailure());
  }
}

function* addPurchasedProduct(action) {
  try {
    const response = yield call(addPurchasedPro, action.payload);
    if (response) {
      yield put(addPurchasedProductSuccess(response));
      message.success("Đặt hàng thành công");
      localStorage.removeItem("orderList");
      const payload = { id: action.payload.cartId };
      yield put(deleteCart(payload));
      action.navigate(action.path);
    }
  } catch (e) {
    message.error("Lỗi trong việc đặt đơn hàng");
    console.log(e);
    yield put(addPurchasedProductFailure());
  }
}

function* PurchasedProSaga() {
  yield all([
    takeLatest(ADD_PURCHASED_PRODUCT, addPurchasedProduct),
    takeLatest(GET_PURCHASED_PRODUCT, getAllPurchasedPro),
    takeLatest(GET_ALL_ORDER , getAllOrder)
  ]);
}

export default PurchasedProSaga;
