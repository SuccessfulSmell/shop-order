import {all_categories} from "../actions";
import {BACK_URL} from "../../../BACK_URL";

export const API_getCategories = () => async (dispatch) => {
    try {

        await fetch(BACK_URL + '/api/products/get_categories/')
            .then(response => response.json())
            .then(data => dispatch(all_categories(data)))
    } catch (e) {
        console.log(e)
    }
}