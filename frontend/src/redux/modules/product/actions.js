import {GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./types";
import axios from "axios";
import {BACK_URL} from "../../BACK_URL";

export const get_product_by_article = (article) => dispatch => {
    dispatch({type: GET_PRODUCT_LOADING})
    axios.get(BACK_URL + '/api/products/get_products/?search=' + article)
        .then(res => {
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch({type: GET_PRODUCT_FAIL})
    })
}
