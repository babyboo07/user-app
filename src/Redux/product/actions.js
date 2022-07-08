export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

export const DETAIL_PRODUCT = 'DETAIL_PRODUCT';
export const DETAIL_PRODUCT_SUCCESS = 'DETAIL_PRODUCT_SUCCESS';
export const DETAIL_PRODUCT_FAILURE = 'DETAIL_PRODUCT_FAILURE';

export const DESTROY_PRODUCT = 'DESTROY_PRODUCT';
export const DESTROY_PRODUCT_SUCCESS = 'DESTROY_PRODUCT_SUCCESS';
export const DESTROY_PRODUCT_FAILURE = 'DESTROY_PRODUCT_FAILURE';

export const GET_CATEGORY_LIST = 'GET_CATEGORY_LIST';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'GET_CATEGORY_LIST_FAILURE';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS ='ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';

export const getProduct =(payload) =>({
    type:'GET_PRODUCT',
    payload
});

export const getProductSuccess =(payload) =>({
    type:'GET_PRODUCT_SUCCESS',
    payload
});

export const getProductFailure =(payload) =>({
    type:'GET_PRODUCT_FAILURE',
    payload
});

export const getDetailProduct =(payload) =>({
    type:'DETAIL_PRODUCT',
    payload
});

export const getDetailProductSuccess =(payload) =>({
    type:'DETAIL_PRODUCT_SUCCESS',
    payload
});

export const getDetailProductFailure =(payload) =>({
    type:'DETAIL_PRODUCT_FAILURE',
    payload
});

export const destroyProduct = (payload) =>({
    type:'DESTROY_PRODUCT',
    payload
});

export const destroyProductSuccess =(payload) =>({
    type:'DESTROY_PRODUCT_SUCCESS',
    payload
});

export const destroyProductFailure = (payload)=>({
    type:'DESTROY_PRODUCT_FAILURE',
    payload
});

export const getCategorylist = (payload) =>({
    type:'GET_CATEGORY_LIST',
    payload
});

export const getCategoryListSuccess = (payload)=>({
    type:'GET_CATEGORY_LIST_SUCCESS',
    payload
});

export const getCategoryListFailure =(payload) =>({
    type:'GET_CATEGORY_LIST_FAILURE',
    payload
});

export const addProduct = (payload) =>({
    type:'ADD_PRODUCT',
    payload
});

export const addProductSuccess =(payload) =>({
    type:'ADD_PRODUCT_SUCCESS',
    payload
});

export const addProductFailure =(payload) =>({
    type:'ADD_PRODUCT_FAILURE',
    payload
});

export const editProduct = (payload) =>({
    type:'EDIT_PRODUCT',
    payload
});

export const editProductSuccess =(payload) =>({
    type:'EDIT_PRODUCT_SUCCESS',
    payload
});

export const editProductFailure =(payload) =>({
    type:'EDIT_PRODUCT_FAILURE',
    payload
});