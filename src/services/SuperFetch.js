import axios from "axios"
import store from "../Redux/store";
import siteConfig from "../siteConfig";

export default class SuperFetch {

    service;

    /**
         * Pass params to the class
         *
         * @param authorizeInfo the authorize information
         * @param locale the locale
         */
    constructor(baseURL = null) {

        let token = localStorage.getItem("token");

        let service = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + token,
            },
            baseURL: baseURL ?? siteConfig.apiRoot,
            timeout: siteConfig.apiTimeout,
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        // service.interceptors.request.use(checkTokenExpired, handleError);
        this.service = service;
    }

    handleSuccess(response) {
        // store.dispatch(setLayoutNotLoading());
        return response;
    }

    handleError(error) {
        // store.dispatch(setLayoutNotLoading());

        if (error.response !== undefined) {
            switch (error.response.status) {
                case 401:
                    // store.dispatch(authActions.authenticateFailure());
                    // notification.error(error.response.status + ': ' + error.response.statusText);
                    break;
                case 404:
                    // notification.error(error.response.status + ': ' + error.response.statusText);
                    break;
                default:
                    // notification.error(error.response.status + ': ' + error.response.statusText);
                    break;
            }
        } else {
            //notification.error(error.message);
        }
        return Promise.reject(error);
    }

    get(path, payload) {
        // store.dispatch(setLayoutLoading());
        if (payload !== undefined && payload) {
            path += '?' + Object.keys(payload).map(key => key + '=' + payload[key]).join('&');
        }

        return this.service.get(path).then((response) => {
            return new Promise(resolve => {
                resolve(response.data);
            });
        });
    }

    post(path, payload) {
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => {
            return new Promise(resolve => {
                resolve(response.data);
            });
        });
    }
}