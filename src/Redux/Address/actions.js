export const GET_PROVINCES = "GET_PROVINCES";
export const GET_PROVINCES_SUCCESS = "GET_PROVINCES_SUCCESS";
export const GET_PROVINCES_FAILURE = "GET_PROVINCES_FAILURE";

export const GET_DISTRICTS = "GET_DISTRICTS";
export const GET_DISTRICTS_SUCCESS = "GET_DISTRICTS_SUCCESS";
export const GET_DISTRICTS_FAILURE = "GET_DISTRICTS_FAILURE";

export const GET_WARDS = "GET_WARDS";
export const GET_WARDS_SUCCESS = "GET_WARDS_SUCCESS";
export const GET_WARDS_FAILURE = "GET_WARDS_FAILURE";

export const GET_ADDRESS = "GET_ADDRESS";
export const GET_ADDRESS_SUCCESS = "GET_ADDRESS_SUCCESS";
export const GET_ADDRESS_FAILURE = "GET_ADDRESS_FAILURE";

export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

export const DETAIL_ADDRESS = "DETAIL_ADDRESS";
export const DETAIL_ADDRESS_SUCCESS = "DETAIL_ADDRESS_SUCCESS";
export const DETAIL_ADDRESS_FAILURE = "DETAIL_ADDRESS_FAILURE";

export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const EDIT_ADDRESS_SUCCESS = "EDIT_ADDRESS_SUCCESS";
export const EDIT_ADDRESS_FAILURE = "EDIT_ADDRESS_FAILURE";

export const getProvinces = (payload) => ({
  type: GET_PROVINCES,
  payload,
});

export const getProvincesSuccess = (payload) => ({
  type: GET_PROVINCES_SUCCESS,
  payload,
});

export const getProvincesFailure = (payload) => ({
  type: GET_PROVINCES_FAILURE,
  payload,
});

export const getDistricts = (payload) => ({
  type: GET_DISTRICTS,
  payload,
});

export const getDistrictsSuccess = (payload) => ({
  type: GET_DISTRICTS_SUCCESS,
  payload,
});

export const getDistrictsFailure = (payload) => ({
  type: GET_DISTRICTS_FAILURE,
  payload,
});

export const getWards = (payload) => ({
  type: GET_WARDS,
  payload,
});

export const getWardsSuccess = (payload) => ({
  type: GET_WARDS_SUCCESS,
  payload,
});

export const getWardsFailure = (payload) => ({
  type: GET_WARDS_FAILURE,
  payload,
});

export const getAddress = (payload) => ({
  type: GET_ADDRESS,
  payload,
});

export const getAddressSuccess = (payload) => ({
  type: GET_ADDRESS_SUCCESS,
  payload,
});

export const getAddressFailure = (payload) => ({
  type: GET_ADDRESS_FAILURE,
  payload,
});

export const createAddress = (payload, navigate) => ({
  type: ADD_ADDRESS,
  payload,
  navigate: navigate,
});

export const createAddressSuccess = (payload) => ({
  type: ADD_ADDRESS_SUCCESS,
  payload,
});

export const createAddressFailure = (payload) => ({
  type: ADD_ADDRESS_FAILURE,
  payload,
});

export const detailAddress = (payload) => ({
  type: DETAIL_ADDRESS,
  payload,
});

export const detailAddressSuccess = (payload) => ({
  type: DETAIL_ADDRESS_SUCCESS,
  payload,
});

export const detailAddressFailure = (payload) => ({
  type: DETAIL_ADDRESS_FAILURE,
  payload,
});

export const editAddress = (payload, navigate) => ({
  type: EDIT_ADDRESS,
  payload,
  navigate: navigate
});

export const editAddressSuccess = (payload) => ({ 
  type: EDIT_ADDRESS_SUCCESS, 
  payload 
});

export const editAddressFailure = (payload) => ({ 
  type: EDIT_ADDRESS_FAILURE,
  payload
});
