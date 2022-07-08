export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'GET_CATEGORY_FAILURE';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

export const GET_PARENT_CATEGORY = 'GET_PARENT_CATEGORY';
export const GET_PARENT_CATEGORY_SUCCESS = 'GET_PARENT_CATEGORY_SUCCESS';
export const GET_PARENT_CATEGORY_FAILURE = 'GET_PARENT_CATEGORY_FAILURE';

export const SHOW_CATE = 'SHOW_CATE';
export const SHOW_CATE_SUCCESS = 'SHOW_CATE_SUCCESS';
export const SHOW_CATE_FAILURE = 'SHOW_CATE_FAILURE';

export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
export const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';

export const DESTROY_CATEGORY = 'DESTROY_CATEGORY';
export const DESTROY_CATEGORY_SUCCESS = 'DESTROY_CATEGORY_SUCCESS';
export const DESTROY_CATEGORY_FAILURE = 'DESTROY_CATEGORY_FAILURE';


export const getCate = (payload) => ({
    type: 'GET_CATEGORY',
    payload
});

export const getCateSuccess = (payload) => ({
    type: 'GET_CATEGORY_SUCCESS',
    payload
});

export const getCateFailure = (payload) => ({
    type: 'GET_CATEGORY_FAILURE',
    payload
});

export const addCate = (payload, navigate) => {
    return ({
        type: 'ADD_CATEGORY',
        payload,
        navigate: navigate
    })
};

export const addCateSuccess = (payload) => ({
    type: 'ADD_CATEGORY_SUCCESS',
    payload
});

export const addCateFailure = (payload) => ({
    type: 'ADD_CATEGORY_FAILURE',
    payload
});

export const getParentCate = (payload) => ({
    type: 'GET_PARENT_CATEGORY',
    payload
});
export const getParentCateSuccess = (payload,navigate) => {
    return (
        {
            type: 'GET_PARENT_CATEGORY_SUCCESS',
            payload,
            navigate: navigate
        }
    )
};

export const getParentCateFailure = (payload) => ({
    type: 'GET_PARENT_CATEGORY_FAILURE',
    payload
});

export const showCategory = (payload) => ({
    type: 'SHOW_CATE',
    payload
});

export const showCategorySuccess = (payload) => ({
    type: 'SHOW_CATE_SUCCESS',
    payload
});

export const showCategoryFailure = (payload) => ({
    type: 'SHOW_CATE_FAILURE',
    payload
});

export const editCategory = (payload, navigate) => ({
    type: 'EDIT_CATEGORY',
    payload,
    navigate
});

export const editCategorySuccess = (payload) => ({
    type: 'EDIT_CATEGORY_SUCCESS',
    payload
});

export const editCategoryFailure = (payload) => ({
    type: 'EDIT_CATEGORY_FAILURE',
    payload
});

export const destroyCate = (payload,searchData) => ({
    type: 'DESTROY_CATEGORY',
    payload,
    searchData
});

export const destroyCateSuccess = (payload) => ({
    type:'DESTROY_CATEGORY_SUCCESS',
    payload
});

export const destroyCateFailure = (payload)=>({
    type: 'DESTROY_CATEGORY_FAILURE',
    payload
});