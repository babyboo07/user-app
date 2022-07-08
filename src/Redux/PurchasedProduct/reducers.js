import {
  ADD_PURCHASED_PRODUCT_FAILURE,
  ADD_PURCHASED_PRODUCT_SUCCESS,
  DESTROY_PURCHASED_PRODUCT_FAILURE,
  DESTROY_PURCHASED_PRODUCT_SUCCESS,
  EDIT_PURCHASED_PRODUCT_FAILURE,
  EDIT_PURCHASED_PRODUCT_SUCCESS,
  GET_ALL_ORDER_FAILURE,
  GET_ALL_ORDER_SUCCESS,
  GET_PURCHASED_PRODUCT_FAILURE,
  GET_PURCHASED_PRODUCT_SUCCESS,
  SHOW_PURCHASED_PRODUCT_FAILURE,
  SHOW_PURCHASED_PRODUCT_SUCCESS,
} from "./actions";

const initialState = {
  pending: false,
  order:{},
  purchasedPro: [],
  detailPurchasedPro: null,
  destroyPurchasedPro: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASED_PRODUCT_SUCCESS:
      return {
        ...state,
        purchasedPro: action.payload,
      };
    case GET_PURCHASED_PRODUCT_FAILURE:
      return {
        ...state,
      };
    case ADD_PURCHASED_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case ADD_PURCHASED_PRODUCT_FAILURE:
      return {
        ...state,
      };
    case SHOW_PURCHASED_PRODUCT_SUCCESS:
      return {
        ...state,
        detailPurchasedPro: action.payload,
      };
    case SHOW_PURCHASED_PRODUCT_FAILURE:
      return {
        ...state,
        detailPurchasedPro: null,
      };
    case EDIT_PURCHASED_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case EDIT_PURCHASED_PRODUCT_FAILURE:
      return {
        ...state,
      };
    case DESTROY_PURCHASED_PRODUCT_SUCCESS:
      return {
        ...state,
        destroyPurchasedPro: action.payload,
      };
    case DESTROY_PURCHASED_PRODUCT_FAILURE:
      return {
        ...state,
      };
    case GET_ALL_ORDER_SUCCESS:
      return{
        ...state,
        order: action.payload
      };
    case GET_ALL_ORDER_FAILURE:
      return{
        ...state,
      }
    default:
      return {
        ...state,
      };
  }
};
