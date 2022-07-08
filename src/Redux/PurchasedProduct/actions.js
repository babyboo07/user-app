export const GET_PURCHASED_PRODUCT = "GET_PURCHASED_PRODUCT";
export const GET_PURCHASED_PRODUCT_SUCCESS = "GET_PURCHASED_PRODUCT_SUCCESS";
export const GET_PURCHASED_PRODUCT_FAILURE = "GET_PURCHASED_PRODUCT_FAILURE";

export const ADD_PURCHASED_PRODUCT = "ADD_PURCHASED_PRODUCT";
export const ADD_PURCHASED_PRODUCT_SUCCESS = "ADD_PURCHASED_PRODUCT_SUCCESS";
export const ADD_PURCHASED_PRODUCT_FAILURE = "ADD_PURCHASED_PRODUCT_FAILURE";

export const SHOW_PURCHASED_PRODUCT = "SHOW_PURCHASED_PRODUCT";
export const SHOW_PURCHASED_PRODUCT_SUCCESS = "SHOW_PURCHASED_PRODUCT_SUCCESS";
export const SHOW_PURCHASED_PRODUCT_FAILURE = "SHOW_PURCHASED_PRODUCT_FAILURE";

export const EDIT_PURCHASED_PRODUCT = "EDIT_PURCHASED_PRODUCT";
export const EDIT_PURCHASED_PRODUCT_SUCCESS = "EDIT_PURCHASED_PRODUCT_SUCCESS";
export const EDIT_PURCHASED_PRODUCT_FAILURE = "EDIT_PURCHASED_PRODUCT_FAILURE";

export const DESTROY_PURCHASED_PRODUCT = "DESTROY_PURCHASED_PRODUCT";
export const DESTROY_PURCHASED_PRODUCT_SUCCESS = "DESTROY_PURCHASED_PRODUCT_SUCCESS";
export const DESTROY_PURCHASED_PRODUCT_FAILURE = "DESTROY_PURCHASED_PRODUCT_FAILURE";

export const GET_ALL_ORDER = "GET_ALL_ORDER";
export const GET_ALL_ORDER_SUCCESS = "GET_ALL_ORDER_SUCCESS";
export const GET_ALL_ORDER_FAILURE = "GET_PURCHASED_PRODUCT_FAILURE";

export const getPurchasedProduct = (payload) => ({
  type: "GET_PURCHASED_PRODUCT",
  payload,
});

export const getPurchasedProductSuccess = (payload) => ({
  type: "GET_PURCHASED_PRODUCT_SUCCESS",
  payload,
});

export const getPurchasedProductFailure = (payload) => ({
  type: "GET_PURCHASED_PRODUCT_FAILURE",
  payload,
});

export const addPurchasedProduct = (payload, navigate, path) => {
  return {
    type: "ADD_PURCHASED_PRODUCT",
    payload,
    navigate: navigate,
    path: path,
  };
};

export const addPurchasedProductSuccess = (payload) => ({
  type: "ADD_PURCHASED_PRODUCT_SUCCESS",
  payload,
});

export const addPurchasedProductFailure = (payload) => ({
  type: "ADD_PURCHASED_PRODUCT_FAILURE",
  payload,
});

export const showPurchasedProduct = (payload) => ({
  type: "SHOW_PURCHASED_PRODUCT",
  payload,
});

export const showPurchasedProductSuccess = (payload) => ({
  type: "SHOW_PURCHASED_PRODUCT_SUCCESS",
  payload,
});

export const showPurchasedProductFailure = (payload) => ({
  type: "SHOW_PURCHASED_PRODUCT_FAILURE",
  payload,
});

export const editPurchasedProduct = (payload, navigate) => ({
  type: "EDIT_PURCHASED_PRODUCT",
  payload,
  navigate,
});

export const editPurchasedProductSuccess = (payload) => ({
  type: "EDIT_PURCHASED_PRODUCT_SUCCESS",
  payload,
});

export const editPurchasedProductFailure = (payload) => ({
  type: "EDIT_PURCHASED_PRODUCT_FAILURE",
  payload,
});

export const destroyPurchasedProduct = (payload, searchData) => ({
  type: "DESTROY_PURCHASED_PRODUCT",
  payload,
  searchData,
});

export const destroyPurchasedProductSuccess = (payload) => ({
  type: "DESTROY_PURCHASED_PRODUCT_SUCCESS",
  payload,
});

export const destroyPurchasedProductFailure = (payload) => ({
  type: "DESTROY_PURCHASED_PRODUCT_FAILURE",
  payload,
});

export const getAllOrders = (payload) => ({ 
    type: "GET_ALL_ORDER", 
    payload 
});

export const getAllOrdersSuccess = (payload) => ({
    type: "GET_ALL_ORDER_SUCCESS", 
    payload
});

export const getAllOrdersFailure = (payload) => ({
    type: "GET_ALL_ORDER_FAILURE",
    payload
});