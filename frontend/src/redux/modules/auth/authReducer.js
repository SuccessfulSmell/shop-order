import {
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from "./types";
import {logout} from "./actions";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOADED:
            if (action.payload.id) {
                return {
                    ...state,
                    isAuthenticated: true,
                    isLoading: false,
                    user: action.payload,
                }
            } else {
                logout()
                return {
                    ...state,
                    isLoading: false,
                    isAuthenticated: false,
                }
            }

        case LOGIN_FAIL:
        case SIGN_UP_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null,
            }
        case LOGIN_SUCCESS:
        case SIGN_UP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }

        default:
            return state
    }

}