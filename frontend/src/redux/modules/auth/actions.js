import {
    AUTH_ERROR,
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGN_UP_FAIL,
    SIGN_UP_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from "./types";
import axios from 'axios';
import {BACK_URL} from "../../BACK_URL";


export const loadUser = () => async (dispatch, getState) => {
    dispatch({type: USER_LOADING});
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `JWT ${token}`
    }
    await axios.get(BACK_URL + '/api/auth/current_user/', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data.user_data,
                payload_orders: res.data.user_orders,
                payload_discount: res.data.user_discount,
            });
        }).catch(err => {
            dispatch({
                type: AUTH_ERROR,
                payload: err,
            })
        });
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const request_body = JSON.stringify({username, password})

    await axios.post(BACK_URL + '/api/auth/sign_in/', request_body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err,
            })
        });
}

export const logout = () => async (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    await axios.post(BACK_URL + '/api/auth/logout/', null, config)
        .then(res => {
            dispatch({type: LOGOUT_SUCCESS,});
        }).catch(err => {
            dispatch({type: AUTH_ERROR,});
        });
}

export const register = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const request_body = JSON.stringify({username, password})

    await axios.post(BACK_URL + '/api/auth/sign_up/', request_body, config)
        .then(res => {
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: err,
            })
        });
}

export const change_password = (old_password, new_password) => async (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const request_body = JSON.stringify({old_password, new_password})
    if (token) {
        config.headers['Authorization'] = `JWT ${token}`
    }
    await axios.patch(BACK_URL + '/api/user/change-password/', request_body, config)
        .then(res => {
            dispatch({type: CHANGE_PASSWORD_SUCCESS,});
        }).catch(err => {
            dispatch({
                type: CHANGE_PASSWORD_FAIL,
                payload: err,
            });
        });

}