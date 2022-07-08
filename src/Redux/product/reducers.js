import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    DESTROY_PRODUCT_FAILURE,
    DESTROY_PRODUCT_SUCCESS,
    DETAIL_PRODUCT_FAILURE,
    DETAIL_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE,
    EDIT_PRODUCT_SUCCESS,
    GET_CATEGORY_LIST_FAILURE,
    GET_CATEGORY_LIST_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_PRODUCT_SUCCESS
} from "./actions";


const initialState = {
    pending: false,
    product: [],
    detailProduct: null,
    destroyProduct: null,
    categories: [],
    isLover: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state
            }
        case DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                detailProduct: action.payload
            }
        case DETAIL_PRODUCT_FAILURE:
            return{
                ...state,
                detailProduct:{}
            }
        case DESTROY_PRODUCT_SUCCESS:
            return{
                ...state,
                detailProduct: action.payload
            }
        case DESTROY_PRODUCT_FAILURE:
            return{
                ...state
            }
        case GET_CATEGORY_LIST_SUCCESS:
            return{
                ...state,
                categories: action.payload
            }
        case GET_CATEGORY_LIST_FAILURE:
            return{
                ...state,
                categories:[]
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state
            }
        case ADD_PRODUCT_FAILURE:
            return{
                ...state
            }
        case EDIT_PRODUCT_SUCCESS:
            return{
                ...state
            }
        case EDIT_PRODUCT_FAILURE:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }
}