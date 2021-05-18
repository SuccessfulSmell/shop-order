import {
    ADD_CATEGORY_FILTER,
    ADD_ORDER_FAIL,
    ADD_ORDER_SUCCESS,
    ADD_PRODUCT_IN_CART_FAIL,
    ADD_PRODUCT_IN_CART_SUCCESS,
    DEC_PRODUCT_SUCCESS,
    FILTER_PRODUCTS,
    GET_PRODUCTS,
    INC_PRODUCT_SUCCESS,
    REMOVE_ALL_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTER,
    REMOVE_PRODUCT_FROM_CART_FAIL,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    RESET_SORT_VALUE,
    SEARCH_PRODUCTS,
    SET_CURRENT_PAGE,
    SET_FETCHING,
    SET_SORT_VALUE
} from "./types";
import {remove_all_category_filters} from "./actions";

const initialState = {
    data: {},
    id_categories: [],
    currentPage: 1,
    perPage: 24,
    pageCount: 1,
    totalCount: 0,
    isFetched: false,
    searchBy: '',
    sortBy: '',
    total_cart:
        localStorage.getItem('products_in_cart')
            ? JSON.parse(localStorage.getItem('products_in_cart')).length > 0
            ? JSON.parse(localStorage.getItem('products_in_cart'))
                .map((product) => (product.price * product.count)).reduce((a, b) => a + b)
            : 0
            : 0,

    products_in_cart:
        localStorage.getItem('products_in_cart')
            ? localStorage.getItem('products_in_cart')
            ? JSON.parse(localStorage.getItem('products_in_cart'))
            : [{}]
            : [{}],
    error: '',
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage),
                searchBy: '',
            }

        case FILTER_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage),
                searchBy: '',
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage),
                searchBy: action.payload.searchBy
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetched: action.payload,
            }

        case ADD_CATEGORY_FILTER:
            remove_all_category_filters();
            return {
                ...state,
                id_categories: [action.payload]
            }

        case REMOVE_CATEGORY_FILTER:
            const new_ids = state.id_categories.filter((ids) => ids.id !== action.payload);
            return {
                ...state,
                id_categories: new_ids,
            }

        case REMOVE_ALL_CATEGORY_FILTER:
            return {
                ...state,
                id_categories: [],
            }

        case SET_SORT_VALUE:
            return {
                ...state,
                sortBy: action.payload,
            }

        case RESET_SORT_VALUE:
            return {
                ...state,
                sortBy: '',
            }

        case ADD_PRODUCT_IN_CART_SUCCESS:
            let total_add = 0
            action.payload.map((product) => {
                total_add += product.price * product.count
            })
            return {
                ...state,
                products_in_cart: action.payload,
                total_cart: total_add.toFixed(2),
            }

        case ADD_PRODUCT_IN_CART_FAIL:
        case REMOVE_PRODUCT_FROM_CART_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        case REMOVE_PRODUCT_FROM_CART_SUCCESS:
            let total_rem = 0
            action.payload.map((product) => {
                total_rem += product.price * product.count
            })
            return {
                ...state,
                products_in_cart: action.payload,
                total_cart: total_rem.toFixed(2),
            }

        case INC_PRODUCT_SUCCESS:
        case DEC_PRODUCT_SUCCESS:
            let total_inc = 0
            action.payload.map((product) => {
                total_inc += product.price * product.count
            })
            return {
                ...state,
                products_in_cart: action.payload,
                total_cart: total_inc.toFixed(2),
            }
        case ADD_ORDER_SUCCESS:
            localStorage.removeItem('products_in_cart')
            return {
                ...state,
                products_in_cart: []
            }
        case ADD_ORDER_FAIL:
            return {
                ...state
            }

        default:
            return state;

    }
}