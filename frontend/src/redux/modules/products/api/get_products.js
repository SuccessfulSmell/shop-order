import {catalog_info} from "../actions";
import {BACK_URL} from "../../../BACK_URL";

let initialPage = 1

export const API_getProducts = (page = initialPage, sort_by = '') => async (dispatch) => {
    URL = BACK_URL + `/api/products/get_products/?page=${page}&sort=${sort_by}`
    try {
        await fetch(URL)
            .then(response => response.json())
            .then(data => dispatch(catalog_info(data)))
    } catch (e) {
        console.log(e)
    }
}