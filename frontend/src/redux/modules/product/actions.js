import {GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./types";
import axios from "axios";
import {BACK_URL} from "../../BACK_URL";
import img_noData from '../../../../../frontend/src/components/pages/shop_main_page/catalog/products/noData.svg'

export const get_product_by_article = (article) => dispatch => {
    dispatch({type: GET_PRODUCT_LOADING})
    axios.get(BACK_URL + '/api/products/get_products/?search=' + article)
        .then(res => {
            if ((res.data.results[0].picture === 'null') || (!res.data.results[0].picture)) {
                res.data.results[0].picture = img_noData
            }
            dispatch({
                type: GET_PRODUCT_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch({type: GET_PRODUCT_FAIL})
    })
}
