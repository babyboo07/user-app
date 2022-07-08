import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch"
import {
    addCartFailure,
    addCartSuccess,
    ADD_CART,
    deleteCartFailure,
    deleteCartSuccess,
    DELETE_CART,
    destroyCartFailure,
    destroyCartSuccess,
    DESTROY_CART,
    showCartFailure,
    showCartSuccess,
    SHOW_CART
} from "./actions";

const createcart = (data) => {
    return new SuperFetch().post('/api/cart/add', data);
}

const showCart = (data) => {
    return new SuperFetch().get('/api/cart/show/' + data.id);
};

const deleteAllCart = (data) => {
    return new SuperFetch().get('/api/cart/destroy/' + data.id);
};

const deleteCart = (data) => {
    return new SuperFetch().get('/api/cart/delete/' + data.id);
};

function* addCart(data) {
    try {
        
        const response = yield call(createcart, data.payload);
        yield put(addCartSuccess(response));
        message.success('Đã thêm vào giỏ hàng thành công');
    } catch (e) {
        message.error('This is an error message');
        yield put(addCartFailure());
    }
}

function* showCarts(data) {
    try {
        const response = yield call(showCart, data.payload);
        yield put(showCartSuccess(response));
    } catch (e) {
        yield put(showCartFailure());
    }
}

function* destroyCart(data) {
    try {
        const response = yield call(deleteAllCart, data.payload);
        yield put(destroyCartSuccess(response));
        // message.success('Xóa thành công khỏi giỏ hàng');
    } catch (e) {
        message.error('This is an error message');
        yield put(destroyCartFailure());
    }
}

function* deleteCarts(data) {
    try {
        const response = yield call(deleteCart, data.payload);
        const result = yield put(deleteCartSuccess(response));

        if(result){
            message.success('Đã xóa sản phẩm khỏi giỏ hàng');
            const payload = {id: data.payload.id};
            yield put({ type: SHOW_CART, payload })
        }
    } catch (e) {
        message.error(e.message);
        yield put(deleteCartFailure());
    }
}

function* CartSaga() {
    yield all([
        takeLatest(ADD_CART, addCart),
        takeLatest(SHOW_CART, showCarts),
        takeLatest(DESTROY_CART, destroyCart),
        takeLatest(DELETE_CART, deleteCarts),
    ])
}

export default CartSaga;