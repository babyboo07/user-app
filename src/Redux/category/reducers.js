import {
    ADD_CATEGORY_FAILURE,
    ADD_CATEGORY_SUCCESS,
    DESTROY_CATEGORY_FAILURE,
    DESTROY_CATEGORY_SUCCESS,
    EDIT_CATEGORY_FAILURE,
    EDIT_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILURE,
    GET_CATEGORY_SUCCESS,
    GET_PARENT_CATEGORY_FAILURE,
    GET_PARENT_CATEGORY_SUCCESS,
    SHOW_CATE_FAILURE,
    SHOW_CATE_SUCCESS
} from "./actions";

const initialState = {
    pending: false,
    cates: [],
    parentCate: [],
    detailCate: null,
    destroyCate: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                cates: action.payload
            };
        case GET_CATEGORY_FAILURE:
            return {
                ...state,
            };
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state
            };
        case ADD_CATEGORY_FAILURE:
            return {
                ...state
            };
        case GET_PARENT_CATEGORY_SUCCESS:
            return {
                ...state,
                parentCate: action.payload
            }
        case GET_PARENT_CATEGORY_FAILURE:
            return {
                ...state,
                parentCate: null
            }
        case SHOW_CATE_SUCCESS:
            return {
                ...state,
                detailCate: action.payload
            };
        case SHOW_CATE_FAILURE:
            return {
                ...state,
                detailCate: null
            };
        case EDIT_CATEGORY_SUCCESS:
            return{
                ...state
            };
        case EDIT_CATEGORY_FAILURE:
            return {
                ...state
            };
        case DESTROY_CATEGORY_SUCCESS:
            return{
                ...state,
                destroyCate: action.payload
            };
        case DESTROY_CATEGORY_FAILURE:
            return {
                ...state
            }
        default:
            return {
                ...state,
            };
    }
}