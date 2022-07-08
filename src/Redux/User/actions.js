export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAIlURE';

export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const EDIT_PASSWORD_SUCCESS = 'EDIT_PASSWORD_SUCCESS';
export const EDIT_PASSWORD_FAILURE = 'EDIT_PASSWORD_FAILURE';

export const SHOW_USER = 'SHOW_USER';
export const SHOW_USER_SUCCESS = 'SHOW_USER_SUCCESS';
export const SHOW_USER_FAILURE = 'SHOW_USER_FAILURE';

export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

export const getUser = (payload) => ({
    type: GET_USER,
    payload
});

export const getUserSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload
});

export const getUserFailure = (payload) => ({
    type: GET_USER_FAILURE,
    payload
});

export const addUser = (payload, navigate, path) => {
    return ({
        type: ADD_USER,
        payload,
        navigate: navigate,
        path: path
    })
};

export const addUserSuccess = (payload) => ({
    type: ADD_USER_SUCCESS,
    payload
});

export const addUserFailure = (payload) => ({
    type: ADD_USER_FAILURE,
    payload
});

export const showUser = (payload) => ({
    type: SHOW_USER,
    payload
});

export const showUserSuccess = (payload) => ({
    type: SHOW_USER_SUCCESS,
    payload
});

export const showUserFailure = (payload) => ({
    type: SHOW_USER_FAILURE,
    payload
});

export const editUser = (payload, navigate, path) => {
    return ({
        type: EDIT_USER,
        payload,
        navigate: navigate,
        path: path
    })
};

export const editUserSuccess = (payload) => ({
    type: EDIT_USER_SUCCESS,
    payload
});

export const editUserFailure = (payload) => ({
    type: EDIT_USER_FAILURE,
    payload
});

export const editPass = (payload, navigate,path) => {
    return({
        type: EDIT_PASSWORD,
        navigate: navigate,
        path: path,
        payload
    })
};

export const editPassSuccess = (payload) => ({
    type: EDIT_PASSWORD_SUCCESS,
    payload
});

export const editPassFailure = (payload) => ({
    type: EDIT_PASSWORD_FAILURE,
    payload
});