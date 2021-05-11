import {search_products} from "../actions";

let initialPage =`http://127.0.0.1:8000/api/products/get_products/?search=`

export const API_getProducts_search = (slug = initialPage) => async (dispatch) => {
    let url = initialPage + slug
    try {
        await fetch(url)
            .then(response => response.json())
            .then(data => dispatch(search_products(data)))
    } catch (e) {
        console.log(e)
    }
}