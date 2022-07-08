export const GET_PRODUCT_LOVER = 'GET_PRODUCT_LOVER';
export const GET_PRODUCT_LOVER_SUCCESS = 'GET_PRODUCT_LOVER_SUCCESS';
export const GET_PRODUCT_LOVER_FAILURE = 'GET_PRODUCT_LOVER_FAILURE';

export const ADD_PRODUCT_LOVER = 'ADD_PRODUCT_LOVER';
export const ADD_PRODUCT_LOVER_SUCCESS = 'ADD_PRODUCT_LOVER_SUCCESS';
export const ADD_PRODUCT_LOVER_FAILURE = 'ADD_PRODUCT_LOVER_FAILURE';

export const DELETE_PRODUCT_LOVER = 'DELETE_PRODUCT_LOVER';
export const DELETE_PRODUCT_LOVER_SUCCESS = 'DELETE_PRODUCT_LOVER_SUCCESS';
export const DELETE_PRODUCT_LOVER_FAILURE = 'DELETE_PRODUCT_LOVER_FAILURE';

export const getProductLover = (payload) => ({
    type: 'GET_PRODUCT_LOVER',
    payload
});

export const getProductLoverSuccess = (payload) => ({
    type: 'GET_PRODUCT_LOVER_SUCCESS',
    payload
});

export const getProductLoverFailure = (payload) => ({
    type: 'GET_PRODUCT_LOVER_FAILURE',
    payload
});

export const addProductLover = (payload) => ({
        type: 'ADD_PRODUCT_LOVER',
        payload,
});

export const addProductLoverSuccess = (payload) => ({
    type: 'ADD_PRODUCT_LOVER_SUCCESS',
    payload
});

export const addProductLoverFailure = (payload) => ({
    type: 'ADD_PRODUCT_LOVER_FAILURE',
    payload
});

export const deleteProductLover = (payload) => ({
    type: 'DELETE_PRODUCT_LOVER',
    payload
});

export const deleteProductLoverSuccess = (payload) => ({
    type: 'DELETE_PRODUCT_LOVER_SUCCESS',
    payload
});

export const deleteProductLoverFailure = (payload) => ({
    type: 'DELETE_PRODUCT_LOVER_FAILURE',
    payload
});