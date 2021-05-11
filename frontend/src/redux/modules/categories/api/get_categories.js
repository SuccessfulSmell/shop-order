
import {all_categories} from "../actions";

export const API_getCategories = () => async (dispatch) => {
    try{

        await fetch('http://127.0.0.1:8000/api/products/get_categories/')
            .then(response => response.json())
            .then(data => dispatch(all_categories(data)))
    } catch (e) {
        console.log(e)
    }
}