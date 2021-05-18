import {
    ADD_CATEGORY_FILTER,
    ADD_ORDER_FAIL,
    ADD_ORDER_SUCCESS,
    ADD_PRODUCT_IN_CART_SUCCESS,
    DEC_PRODUCT_SUCCESS,
    FILTER_PRODUCTS,
    GET_PRODUCTS,
    INC_PRODUCT_SUCCESS,
    REMOVE_ALL_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTER,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    RESET_SORT_VALUE,
    SEARCH_PRODUCTS,
    SET_CURRENT_PAGE,
    SET_FETCHING,
    SET_SORT_VALUE
} from "./types";
import axios from 'axios';
import {BACK_URL} from "../../BACK_URL";
import {loadUser} from "../auth/actions";

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

export const set_sort_value = sort_value => ({
    type: SET_SORT_VALUE,
    payload: sort_value,
})

export const reset_sort_value = () => ({
    type: RESET_SORT_VALUE,
})

export const remove_product_from_cart = (id) => (dispatch) => {
    try {

        let cart = JSON.parse(localStorage.getItem('products_in_cart'))
        let filtered_products = cart.filter((product) => {
            return product.id !== id
        })
        let products = JSON.stringify([...filtered_products])
        localStorage.setItem('products_in_cart', products)
        dispatch(
            {
                type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
                payload: filtered_products,
            }
        )
    } catch {
        dispatch(
            {
                type: 'REMOVE_PRODUCT_FROM_CART_FAIL'
            })
    }
}

export const add_product_in_cart = (id, icon, name, desc, price) => (dispatch) => {
    let error = ''
    let count = 1
    let products
    try {
        let cart = JSON.parse(localStorage.getItem('products_in_cart'))
        if (cart) {
            for (let i = 0; i < cart.length; ++i) {
                if (cart[i].id === id) {
                    count++;
                    cart[i].count++;
                }
            }
            if (count > 1) {
                products = JSON.stringify([...cart])
            } else {
                products = JSON.stringify([...cart, {id, count, icon, name, desc, price}])
            }

        } else {
            products = JSON.stringify([{id, count, icon, name, desc, price}])
        }
        localStorage.setItem('products_in_cart', products)
        dispatch({
            type: ADD_PRODUCT_IN_CART_SUCCESS,
            payload: JSON.parse(products),
        })
    } catch (e) {
        error = e
        dispatch(
            {
                type: 'ADD_PRODUCT_IN_CART_FAIL',
                payload: error,
            }
        )
    }
    return error
}

export const dec_product_cart = (id) => (dispatch) => {
    try {
        let cart = JSON.parse(localStorage.getItem('products_in_cart'))
        for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id === id) {
                cart[i].count--;
                if (cart[i].count === 0) {
                    cart.splice(i, 1)
                    break;
                }
            }
        }
        let products = JSON.stringify([...cart])
        localStorage.setItem('products_in_cart', products)

        dispatch({
            type: DEC_PRODUCT_SUCCESS,
            payload: JSON.parse(products),
        })

    } catch (e) {

    }
}
export const inc_product_cart = (id) => (dispatch) => {
    try {
        let cart = JSON.parse(localStorage.getItem('products_in_cart'))
        for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id === id) {
                cart[i].count++;
            }
        }
        let products = JSON.stringify([...cart])
        localStorage.setItem('products_in_cart', products)

        dispatch({
            type: INC_PRODUCT_SUCCESS,
            payload: JSON.parse(products),
        })
    } catch (e) {

    }
}

export const add_order = (products_source, total, email, first_name, last_name, comment, address, phone, pay_type) =>
    async (dispatch, getState) => {
        const token = getState().auth.token
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (token) {
            config.headers['Authorization'] = `JWT ${token}`
        }
        let products = []
        products_source.map((product) => {
            for (let i = 1; i <= product.count; i++) {
                products.push(product.id)
            }
        })

        const request_body = JSON.stringify({
            products,
            total,
            email,
            first_name,
            last_name,
            comment,
            address,
            phone,
            pay_type
        })

        await axios.post(BACK_URL + '/api/user/add_order/', request_body, config)
            .then(() => {
                dispatch({
                    type: ADD_ORDER_SUCCESS,
                })
            }).catch(() => {
                dispatch({
                    type: ADD_ORDER_FAIL,
                })
            })
        loadUser();
    }