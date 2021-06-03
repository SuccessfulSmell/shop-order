import {GET_ALL_CATEGORIES, GET_ALL_GROUPS} from "./types";
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