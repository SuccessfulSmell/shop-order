import {
    ADD_CATEGORY_FILTER,
    FILTER_PRODUCTS,
    GET_PRODUCTS,
    REMOVE_ALL_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTER,
    SEARCH_PRODUCTS,
    SET_CURRENT_PAGE,
    SET_FETCHING
} from "./types";

export const catalog_info = data => ({
    type: GET_PRODUCTS,
    payload: data,
})

export const add_filter_category = id_category => ({
    type: ADD_CATEGORY_FILTER,
    payload: id_category,
})

export const filter_products = data => ({
    type: FILTER_PRODUCTS,
    payload: data,
})

export const set_current_page = page => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const set_fatching = bool => ({
    type: SET_FETCHING,
    payload: bool
})

export const remove_category_filter = id => ({
    type: REMOVE_CATEGORY_FILTER,
    payload: id,
})

export const search_products = data => ({
    type: SEARCH_PRODUCTS,
    payload: data,
})

export const remove_all_category_filters = () => ({
    type: REMOVE_ALL_CATEGORY_FILTER,
})
