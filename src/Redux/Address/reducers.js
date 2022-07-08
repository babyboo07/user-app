import {
    GET_WARDS_SUCCESS,
    GET_WARDS_FAILURE,
    GET_DISTRICTS_SUCCESS,
    GET_DISTRICTS_FAILURE,
    GET_PROVINCES_SUCCESS,
    GET_PROVINCES_FAILURE,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILURE,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAILURE,
    DETAIL_ADDRESS_SUCCESS,
    DETAIL_ADDRESS_FAILURE,
    EDIT_ADDRESS_SUCCESS,
    EDIT_ADDRESS_FAILURE
} from './actions'

const initialState = {
    provinces: [],
    districts: [],
    wards: [],
    addressuser:[],
    addressdetails:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PROVINCES_SUCCESS:
            return {
                ...state,
                provinces: action.payload
            };
        
        case GET_PROVINCES_FAILURE:
            return {
                ...state,
                provinces: []
            };

        case GET_DISTRICTS_SUCCESS:
            return{
                ...state,
                districts: action.payload,
                wards: []
            };
        case GET_DISTRICTS_FAILURE:
            return{
                ...state,
                districts: [],
                wards: []
            };
            
        case GET_WARDS_SUCCESS:
            return{
                ...state,
                wards: action.payload
            };
        case GET_WARDS_FAILURE:
            return{
                ...state,
                wards: []
            };
        case GET_ADDRESS_SUCCESS:
            return{
                ...state,
                addressuser: action.payload
            };
        case GET_ADDRESS_FAILURE:
            return{
                ...state,
            }
        case ADD_ADDRESS_SUCCESS:
            return{
                ...state,
            }
        case ADD_ADDRESS_FAILURE:
            return{
                ...state,
            }
        case DETAIL_ADDRESS_SUCCESS:
            return{
                ...state,
                addressdetails: action.payload
            }
        case DETAIL_ADDRESS_FAILURE:
            return{
                ...state,
            }
        case EDIT_ADDRESS_SUCCESS:
            return{
                ...state,
            }
        case EDIT_ADDRESS_FAILURE:
            return{
                ...state,
            }
        default:
            return {
                ...state
            };
    }
}