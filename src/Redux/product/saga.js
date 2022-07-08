import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch";
import { destroyCateFailure } from "../category/actions";
import {
  addProductFailure,
  addProductSuccess,
  ADD_PRODUCT,
  destroyProductSuccess,
  DESTROY_PRODUCT,
  DETAIL_PRODUCT,
  editProductFailure,
  editProductSuccess,
  EDIT_PRODUCT,
  getCategoryListFailure,
  getCategoryListSuccess,
  getDetailProductFailure,
  getDetailProductSuccess,
  getProductFailure,
  getProductSuccess,
  GET_CATEGORY_LIST,
  GET_PRODUCT,
} from "./actions";

const getProduct = (data) => {
  return new SuperFetch().get("api/product", data);
};

const detailProduct = (data) => {
  return new SuperFetch().get("api/product/detail/" + data.id);
};

const destroyProduct = (data) => {
  return new SuperFetch().get("api/product/delete/" + data.id);
};

const getCategoryList = (data) => {
  return new SuperFetch().get("api/product/catelist", data);
};

const addPro = (data) => {
  return new SuperFetch().post("api/product/add", data);
};

const editPro = (data) => {
  return new SuperFetch().post("api/product/edit/" + data.id, data);
};

function* getProductList(data) {
  try {
    const response = yield call(getProduct, data.payload);
    yield put(getProductSuccess(response));
  } catch (e) {
    yield put(getProductFailure());
  }
}

function* detailProducts(data) {
  try {
    const response = yield call(detailProduct, data.payload);
    if (response) {
      yield put(getDetailProductSuccess(response));
    }
  } catch (e) {
    yield put(getDetailProductFailure());
  }
}

function* deleteProduct(data) {
  try {
    const response = yield call(destroyProduct, data.payload);
    yield put(destroyProductSuccess(response));
    message.success("This is a success message");
  } catch (e) {
    message.error("This is an error message");
    yield put(destroyCateFailure());
  }
}

function* getCateList(data) {
  try {
    const response = yield call(getCategoryList, data.payload);
    yield put(getCategoryListSuccess(response));
  } catch (e) {
    yield put(getCategoryListFailure());
  }
}

function* addProduct(data) {
  try {
    const response = yield call(addPro, data.payload);
    message.success("This is a success message");
    yield put(addProductSuccess(response));
  } catch (e) {
    message.error("This is an error message");
    yield put(addProductFailure());
  }
}

function* editProduct(data) {
  try {
    const response = yield call(editPro, data.payload);
    yield put(editProductSuccess(response));
    message.success("This is a success message");
  } catch (e) {
    message.error("This is an error message");
    yield put(editProductFailure());
  }
}

function* ProductSaga() {
  yield all([
    takeLatest(GET_PRODUCT, getProductList),
    takeLatest(DETAIL_PRODUCT, detailProducts),
    takeLatest(DESTROY_PRODUCT, deleteProduct),
    takeLatest(GET_CATEGORY_LIST, getCateList),
    takeLatest(ADD_PRODUCT, addProduct),
    takeLatest(EDIT_PRODUCT, editProduct),
  ]);
}

export default ProductSaga;
