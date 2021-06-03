import {GET_ADV, GET_ALL_CATEGORIES, GET_ALL_GROUPS, GET_ALL_SALES, GET_SITE_INFO} from "./types";
import axios from "axios";
import {BACK_URL} from "../../BACK_URL";

export const all_categories = data => ({
    type: GET_ALL_CATEGORIES,
    payload: data,
})

export const get_groups = () => async (dispatch, getState) => {
    await axios.get(BACK_URL + '/api/products/get_group_categories/')
        .then(res => {
            dispatch({
                type: GET_ALL_GROUPS,
                payload: res.data,
            })
        })
}

export const get_adv = () => async (dispatch) => {
    await axios.get(BACK_URL + '/api/admin_sales/')
        .then(res =>{
            dispatch({
                type: GET_ADV,
                payload: res.data
            })
        })
}

export const get_all_sales = () => async (dispatch) => {
    await axios.get(BACK_URL + '/api/sales/')
        .then(res =>{
            dispatch({
                type: GET_ALL_SALES,
                payload: res.data,
            })
        })
}

export const get_site_info = () => async  (dispatch) => {
    await axios.get(BACK_URL + '/api/site_info/')
        .then(res => {
            dispatch({
                type: GET_SITE_INFO,
                payload:res.data,
            })
        })
}