import { all, call, put, takeEvery, takeLatest, push } from "redux-saga/effects";
import { 
    AUTHENTICATE, 
    authenticateSuccess, 
    authenticateFailure, 
    LOGIN,
    loginSuccess,
    loginFailure,
    LOGIN_SUCCESS,
    CHECK_AUTHORIZE,
    getUserInfoSuccess,
    GET_USER_INFO_FAILURE
} from "./actions";
import { message } from "antd";
import SuperFetch from "../../services/SuperFetch";

const getAuth = () => {
    return new SuperFetch().get("/api/user", null);
}
const loginAction = (data) => {
    return new SuperFetch().post("/api/login", data);
}
const getUserInfo = () => {
    return new SuperFetch().get("/api/getUserInfo")
}

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* authenticate() {
    try {
        const response = yield call(getAuth);
        yield put(authenticateSuccess());
    } catch (e) {

        yield put(authenticateFailure());
    }
}

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* login(action) {
    try {
        const response = yield call(loginAction, action.payload);
        if(response){
            localStorage.setItem("token", response.access_token)
            localStorage.setItem("user", JSON.stringify(response.user))
            message.success('This is a success message');
            yield put(loginSuccess());
        }
        // action.navigate("/");
    } catch (e) {
        message.error('This is an error message');
        yield put(loginFailure());
    }
}

function* checkAuthorization() {
    const token = localStorage.getItem("token");
    if (token) {
        yield put({
            type: LOGIN_SUCCESS
        });
    }
}

function* loginSuccessully() {
    // const navigate = useNavigate()
    try {
        const response = yield call(getUserInfo);
        yield put(getUserInfoSuccess());
        //window.location.href = "/"
    } catch (e) {

        yield put({ type: GET_USER_INFO_FAILURE });
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_USER_REQUEST` action.
  Allows concurrent increments.
*/
function* AuthSaga() {
    yield all([
        takeLatest(AUTHENTICATE, authenticate),
        takeLatest(LOGIN, login),
        takeLatest(CHECK_AUTHORIZE, checkAuthorization),
        takeLatest(LOGIN_SUCCESS, loginSuccessully)
    ]);
}

export default AuthSaga;