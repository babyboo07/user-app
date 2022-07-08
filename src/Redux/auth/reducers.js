import {
    AUTHENTICATE,
    AUTHENTICATE_FAILURE,
    AUTHENTICATE_SUCCESS,
    GET_USER_INFO_FAILURE,
    GET_USER_INFO_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
} from "./actions";

const initialState = {
    pending: false,
    users: [],
    error: null,
    isAuth: false,
    userInfo: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state
            };
        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                isAuth: true
            };
        case AUTHENTICATE_FAILURE:
            return {
                ...state,
                isAuth: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isAuth: true,
                userInfo: action.payload
            };
        case GET_USER_INFO_FAILURE:
            return {
                ...state,
                isAuth: false,
                userInfo: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false
            };
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return {
                ...state,
            };
    }
};