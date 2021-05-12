import {catalog_info} from "../actions";
import {BACK_URL} from "../../../BACK_URL";

let initialPage = BACK_URL + `/api/products/get_products/?page=1`

export const API_getProducts = (page = initialPage) => async (dispatch) => {
    try {
        await fetch(page)
            .then(response => response.json())
            .then(data => dispatch(catalog_info(data)))
    } catch (e) {
        console.log(e)
    }
}