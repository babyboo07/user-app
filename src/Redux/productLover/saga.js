import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch";
import {
  addProductLoverFailure,
  addProductLoverSuccess,
  ADD_PRODUCT_LOVER,
  deleteProductLoverFailure,
  deleteProductLoverSuccess,
  DELETE_PRODUCT_LOVER,
  getProductLover,
  getProductLoverFailure,
  getProductLoverSuccess,
  GET_PRODUCT_LOVER,
} from "./actions";

const getProductLovers = (data) => {
  return new SuperFetch().get("/api/productLovers/" + data.id);
};

const destroyProLovers = (data) => {
  return new SuperFetch().get(`/api/productLovers/delete/${data.proLoverId}/${data.userId}`);
};

const addProLover = (data) => {
  return new SuperFetch().post("/api/productLovers/add" , data);
};

function* getAllProLovers(data) {
  try {
    const response = yield call(getProductLovers, data.payload);
    yield put(getProductLoverSuccess(response));
  } catch (e) {
    message.error("This is an error message");
    yield put(getProductLoverFailure());
  }
}

function* deleteProductLover(data) {
  try {
    const response = yield call(destroyProLovers, data.payload);
    if (response) {
      yield put(deleteProductLoverSuccess(response));
      const payload = { id: data.payload.userId };
      yield put(getProductLover(payload));
    }
  } catch (e) {
    message.error("This is an error message");
    yield put(deleteProductLoverFailure());
  }
}

function* createProductLover(data) {
  try {
    const response = yield call(addProLover, data.payload);  
    if(response){
      yield put(addProductLoverSuccess(response));
    }
  } catch (e) {
    yield put(addProductLoverFailure());
  }
}

function* ProductLoversSaga() {
  yield all([takeLatest(GET_PRODUCT_LOVER, getAllProLovers)]);
  yield all([takeLatest(DELETE_PRODUCT_LOVER, deleteProductLover)]);
  yield all([takeLatest(ADD_PRODUCT_LOVER , createProductLover)]);
}

export default ProductLoversSaga;
