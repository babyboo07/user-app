import { message } from "antd";
import { act } from "react-dom/test-utils";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch";
import SuperFetch2 from "../../services/SuperFetch2";
import {
  ADD_ADDRESS,
  createAddressFailure,
  createAddressSuccess,
  detailAddressFailure,
  detailAddressSuccess,
  DETAIL_ADDRESS,
  editAddressFailure,
  editAddressSuccess,
  EDIT_ADDRESS,
  getAddressFailure,
  getAddressSuccess,
  getDistrictsFailure,
  getDistrictsSuccess,
  getProvincesFailure,
  getProvincesSuccess,
  getWardsFailure,
  getWardsSuccess,
  GET_ADDRESS,
  GET_DISTRICTS,
  GET_PROVINCES,
  GET_WARDS,
} from "./actions";

const getProvincesData = () => {
  return new SuperFetch2().get("https://provinces.open-api.vn/api/p");
};

const getDistrictsData = (cityId) => {
  return new SuperFetch2().get("https://provinces.open-api.vn/api/p/" + cityId + "?depth=2");
};

const getWardsData = (distId) => {
  return new SuperFetch2().get("https://provinces.open-api.vn/api/d/" + distId + "?depth=2");
};

const getAddress = (data) => {
  return new SuperFetch().get("/api/address/" + data.id);
};

const createAddress = (data) => {
  return new SuperFetch().post("/api/address/add", data);
};

const detailAddress = (data) => {
  return new SuperFetch().get("/api/address/detail/"+ data.id);
};

const editUserAddress = (data) => {
  return new SuperFetch().post("/api/address/edit/"+ data.id ,data);
};

function* getProvinces(data) {
  try {
    const res = yield call(getProvincesData);
    yield put(getProvincesSuccess(res));
  } catch (e) {
    yield put(getProvincesFailure());
  }
}

function* getDistricts(data) {
  try {
    const res = yield call(getDistrictsData, data.payload);

    if (res) {
      yield put(getDistrictsSuccess(res.districts));
    }
  } catch (e) {
    yield put(getDistrictsFailure());
  }
}

function* getWards(data) {
  try {
    const res = yield call(getWardsData, data.payload);

    if (res) {
      yield put(getWardsSuccess(res.wards));
    }
  } catch (e) {
    yield put(getWardsFailure());
  }
}

function* getUserAddress(data) {
  try {
    const res = yield call(getAddress, data.payload);
    if (res) {
      yield put(getAddressSuccess(res));
    }
  } catch (e) {
    yield put(getAddressFailure());
  }
}

function* addAddress(actions) {
  try {
    const res = yield call(createAddress, actions.payload);
    if (res) {
      yield put(createAddressSuccess(res));
      message.success("Thêm mới địa chỉ thành công!");
      actions.navigate("/user/address/" + res.userId);
    }
  } catch (e) {
    yield put(createAddressFailure());
  }
}

function* getDetailAddress(data) {
  try {
    const res = yield call(detailAddress, data.payload);
    if (res) {
    yield put(detailAddressSuccess(res));
    }
  } catch (e) {
    console.log(e);
    yield put(detailAddressFailure());
  }
}

function* editAddress(action){
  try {
    const res = yield call(editUserAddress, action.payload);  
    if(res){
      yield put(editAddressSuccess(res));
      message.success("Cập nhật địa chỉ thành công!");
      action.navigate('/user/address/'+ res.userId);
    }
  } catch (e) {
    yield put(editAddressFailure());
  }
}

function* AddressSaga() {
  yield all([
    takeLatest(GET_PROVINCES, getProvinces),
    takeLatest(GET_DISTRICTS, getDistricts),
    takeLatest(GET_WARDS, getWards),
    takeLatest(GET_ADDRESS, getUserAddress),
    takeLatest(ADD_ADDRESS, addAddress),
    takeLatest(DETAIL_ADDRESS ,getDetailAddress),
    takeLatest(EDIT_ADDRESS, editAddress),
  ]);
}

export default AddressSaga;
