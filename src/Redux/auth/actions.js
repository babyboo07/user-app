export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAILURE = "AUTHENTICATE_FAILURE";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const CHECK_AUTHORIZE = "CHECK_AUTHORIZE";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

export const LOGOUT = "LOGOUT";

export const authenticate = () => ({
    type: AUTHENTICATE,
});

export const authenticateSuccess = (payload) => ({
    type: AUTHENTICATE_SUCCESS,
    payload,
});

export const authenticateFailure = (payload) => ({
    type: AUTHENTICATE_FAILURE,
    payload,
});

export const login = (payload) => ({
    type: LOGIN,
    payload
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: LOGIN_FAILURE,
    payload
});

export const logout = () => ({
    type: LOGOUT
})

export const checkAuthorization = () => ({
    type: CHECK_AUTHORIZE
})

export const getUserInfoSuccess = (payload) => ({
    type: GET_USER_INFO_SUCCESS,
    payload
})