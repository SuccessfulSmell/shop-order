import {catalog_info} from "../actions";

let initialPage =`http://localhost:8000/api/products/get_products`

export const API_getProducts = (page = initialPage) => async (dispatch) => {
    try {
        await fetch(page)
            .then(response => response.json())
            .then(data => dispatch(catalog_info(data)))
    } catch (e) {
        console.log(e)
    }
}