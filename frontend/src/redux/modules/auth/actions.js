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
                payload: res.data
            });
        }).catch(err => {
            dispatch({type: AUTH_ERROR})
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
            dispatch({type: LOGIN_FAIL})
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
            dispatch({type: SIGN_UP_FAIL})
        });
}