import {
    ADD_CART_FAILURE,
    ADD_CART_SUCCESS,
    DELETE_CART_FAILURE,
    DELETE_CART_SUCCESS,
    DESTROY_CART_FAILURE,
    DESTROY_CART_SUCCESS,
    GET_CART_FAILURE,
    GET_CART_SUCCESS,
    SHOW_CART_FAILURE,
    SHOW_CART_SUCCESS
} from "./actions";

const initialState = {
    pending: false,
    cart: [],
    parentCart: [],
    detailCart: [],
    destroyCart: null,
    deleteCart: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload
            };
        case GET_CART_FAILURE:
            return {
                ...state,
            };
        case ADD_CART_SUCCESS:
            return {
                ...state
            };
        case ADD_CART_FAILURE:
            return {
                ...state
            };
        case SHOW_CART_SUCCESS:
            return{
                ...state,
                detailCart: action.payload
            }
        case SHOW_CART_FAILURE:
            return{
                ...state,
                detailCart:{}
            }
        case DESTROY_CART_SUCCESS:
            return{
                ...state,
                destroyCart:action.payload
            } 
        case DESTROY_CART_FAILURE:
            return{
                ...state
            }
        case DELETE_CART_SUCCESS:
            return{
                ...state,
                deleteCart: action.payload
            };
        case DELETE_CART_FAILURE:
            return{
                ...state,
            }
        default:
            return {
                ...state,
            };
    }
}