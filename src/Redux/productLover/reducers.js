import { ADD_PRODUCT_LOVER_FAILURE, ADD_PRODUCT_LOVER_SUCCESS, DELETE_PRODUCT_LOVER_FAILURE, DELETE_PRODUCT_LOVER_SUCCESS, GET_PRODUCT_LOVER_FAILURE, GET_PRODUCT_LOVER_SUCCESS } from "./actions";

const initialState = {
    pending: false,
    productLover: [],
    parentproductLover: [],
    deleteProductLover: null,
    isLover: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LOVER_SUCCESS:
            return {
                ...state,
                productLover: action.payload
            };
        case GET_PRODUCT_LOVER_FAILURE:
            return {
                ...state,
            };
        case ADD_PRODUCT_LOVER_SUCCESS:
            return {
                ...state,
                isLover: true,
            };
        case ADD_PRODUCT_LOVER_FAILURE:
            return {
                ...state
            };
        case DELETE_PRODUCT_LOVER_SUCCESS:
            return{
                ...state,
                deleteProductLover: action.payload,
                isLover: false,
            };
        case DELETE_PRODUCT_LOVER_FAILURE:
            return{
                ...state,
            }
        default:
            return {
                ...state,
            };
    }
}