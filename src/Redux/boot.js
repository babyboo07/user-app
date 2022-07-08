import store from './store';
import {checkAuthorization} from './auth/actions';

/**
 * Check authorization first
 *
 * @returns {Promise<unknown>}
 */
export default () =>
    new Promise(() => {
        store.dispatch(checkAuthorization());
    });