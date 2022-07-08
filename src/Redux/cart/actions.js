export const GET_CART = 'GET_CART';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_FAILURE = 'GET_CART_FAILURE';

export const ADD_CART = 'ADD_CART';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

export const SHOW_CART = 'SHOW_CART';
export const SHOW_CART_SUCCESS = 'SHOW_CART_SUCCESS';
export const SHOW_CART_FAILURE = 'SHOW_CART_FAILURE';

export const DELETE_CART = 'DELETE_CART';
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILURE = 'DELETE_CART_FAILURE';

export const DESTROY_CART = 'DESTROY_CART';
export const DESTROY_CART_SUCCESS = 'DESTROY_CART_SUCCESS';
export const DESTROY_CART_FAILURE = 'DESTROY_CART_FAILURE';


export const getCart = (payload) => ({
    type: 'GET_CART',
    payload
});

export const getCartSuccess = (payload) => ({
    type: 'GET_CART_SUCCESS',
    payload
});

export const getCartFailure = (payload) => ({
    type: 'GET_CART_FAILURE',
    payload
});

export const addCart = (payload) => ({
        type: 'ADD_CART',
        payload,
});

export const addCartSuccess = (payload) => ({
    type: 'ADD_CART_SUCCESS',
    payload
});

export const addCartFailure = (payload) => ({
    type: 'ADD_CART_FAILURE',
    payload
});


export const showCart = (payload) => {
    return {
        type: 'SHOW_CART',
        payload
    };
}
export const showCartSuccess = (payload) => ({
    type: 'SHOW_CART_SUCCESS',
    payload
});

export const showCartFailure = (payload) => ({
    type: 'SHOW_CART_FAILURE',
    payload
});

export const deleteCart = (payload) => ({
    type: 'DELETE_CART',
    payload
});

export const deleteCartSuccess = (payload) => ({
    type: 'DELETE_CART_SUCCESS',
    payload
});

export const deleteCartFailure = (payload) => ({
    type: 'DELETE_CART_FAILURE',
    payload
});

export const destroyCart = (payload,searchData) => ({
    type: 'DESTROY_CART',
    payload,
    searchData
});

export const destroyCartSuccess = (payload) => ({
    type:'DESTROY_CART_SUCCESS',
    payload
});

export const destroyCartFailure = (payload)=>({
    type: 'DESTROY_CART_FAILURE',
    payload
});