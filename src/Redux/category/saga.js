import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch"
import {
    addCateFailure,
    addCateSuccess,
    ADD_CATEGORY,
    destroyCateFailure,
    DESTROY_CATEGORY,
    editCategoryFailure,
    editCategorySuccess,
    EDIT_CATEGORY,
    getCate,
    getCateFailure,
    getCateSuccess,
    getParentCateFailure,
    getParentCateSuccess,
    GET_CATEGORY,
    GET_PARENT_CATEGORY,
    showCategoryFailure,
    showCategorySuccess,
    SHOW_CATE
} from "./actions";

const getCateList = (data) => {
    return new SuperFetch().get('/api/category', data);
};

const getParentCate = (data) => {
    return new SuperFetch().get('/api/category/getParentList', data);
}

const addCate = (data) => {
    return new SuperFetch().post('/api/category/add', data);
}

const showCate = (data) => {
    return new SuperFetch().get('/api/category/show/' + data.id);
}

const editCate = (data) => {
    return new SuperFetch().post('/api/category/edit/' + data.id, data);
}

const deleteCate = (data) => {
    return new SuperFetch().get('/api/category/delete/' + data.id);
}

function* getCategory(data) {
    try {
        const response = yield call(getCateList, data.payload);
        yield put(getCateSuccess(response));
    } catch (e) {
        message.error('This is an error message');
        yield put(getCateFailure());
    }
}

function* getParentCategory(data) {
    try {
        const response = yield call(getParentCate, data.payload);
        yield put(getParentCateSuccess(response));
    } catch (e) {
        yield put(getParentCateFailure());
    }
}

function* addCategory(action) {
    try {
        const response = yield call(addCate, action.payload);
        if (response.id > 0) {
            yield put(addCateSuccess(response));
            message.success('This is a success message');
            action.navigate('/category/List');
        }
    } catch (e) {
        message.error('This is an error message');
        //yield put(addCateFailure());
    }
}
function* showCategory(data) {
    try {
        const response = yield call(showCate, data.payload);
        yield put(showCategorySuccess(response))
    } catch (e) {
        yield put(showCategoryFailure());
    }
}

function* editCategory(action) {
    try {
        const response = yield call(editCate, action.payload);
        yield put(editCategorySuccess(response));
        message.success('This is a success message');
        action.navigate('/category/List');
    } catch (e) {
        message.error('This is an error message');
        yield put(editCategoryFailure());
    }
}

function* destroyCategory(data) {
    try {
        const response = yield call(deleteCate, data.payload);
        yield put(getCate(data.searchData));
        message.success('This is a success message');
    } catch (e) {
        message.error('This is an error message');
        yield put(destroyCateFailure());
    }
}

function* CateSaga() {
    yield all([
        takeLatest(GET_CATEGORY, getCategory),
        takeLatest(GET_PARENT_CATEGORY, getParentCategory),
        takeLatest(ADD_CATEGORY, addCategory),
        takeLatest(SHOW_CATE, showCategory),
        takeLatest(EDIT_CATEGORY, editCategory),
        takeLatest(DESTROY_CATEGORY, destroyCategory)
    ])
}

export default CateSaga;