import {filter_products} from "../actions";

export const API_getProducts_byCatID = (categories, page = 1, sort_by = '') => async (dispatch) => {
    let id = categories.id

    try {
        await fetch(`http://localhost:8000/api/products/get_products/${id}/?page=${page}&sort=${sort_by}`)
            .then(response => response.json())
            .then(data => dispatch(filter_products(data)))
    } catch (e) {
        console.log(e)
    }
}