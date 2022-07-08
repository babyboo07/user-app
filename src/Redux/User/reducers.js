import {
    ADD_USER,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    EDIT_PASSWORD,
    EDIT_PASSWORD_FAILURE,
    EDIT_PASSWORD_SUCCESS,
    EDIT_USER,
    EDIT_USER_FAILURE,
    EDIT_USER_SUCCESS,
    GET_USER,
    GET_USER_FAILURE,
    GET_USER_SUCCESS,
    SHOW_USER,
    SHOW_USER_FAILURE,
    SHOW_USER_SUCCESS
} from "./actions";

const initialState = {
    pending: false,
    users: [],
    detailUser: null,
    destroyUser: null,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        case GET_USER_FAILURE:
            return {
                ...state,
                users: []
            };
        case ADD_USER:
            return {
                ...state
            };
        case ADD_USER_SUCCESS:
            return {
                ...state
            };
        case ADD_USER_FAILURE:
            return {
                ...state
            };
        case SHOW_USER:
            return {
                ...state,
            }
        case SHOW_USER_SUCCESS:
            return {
                ...state,
                detailUser: action.payload
            };
        case SHOW_USER_FAILURE:
            return {
                ...state,
                detailUser: null,
            };
        case EDIT_USER:
            return {
                ...state,
            };
        case EDIT_USER_SUCCESS:
            return {
                ...state
            };
        case EDIT_USER_FAILURE:
            return {
                ...state
            };
        case EDIT_PASSWORD:
            return{
                ...state,
            };
        case EDIT_PASSWORD_SUCCESS:
            return{
                ...state,
            };
        case EDIT_PASSWORD_FAILURE:
            return{
                ...state,
            };
        default:
            return {
                ...state,
            };

    }
}