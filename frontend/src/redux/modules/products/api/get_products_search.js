import {search_products} from "../actions";
import {BACK_URL} from "../../../BACK_URL";

export const API_getProducts_search = (slug = '', page = '1', sort_by = '') => async (dispatch) => {
    let url = BACK_URL + `/api/products/get_products/?search=${slug}&page=${page}&sort=${sort_by}`
    try {
        await fetch(url)
            .then(response => response.json())

            .then(data => {
                data.searchBy = slug;
                dispatch(search_products(data));
            })
    } catch (e) {
        console.log(e)

    }
}