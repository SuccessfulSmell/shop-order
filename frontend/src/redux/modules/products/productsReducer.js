import {
    ADD_CATEGORY_FILTER,
    FILTER_PRODUCTS,
    GET_PRODUCTS, REMOVE_ALL_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTER, SEARCH_PRODUCTS,
    SET_CURRENT_PAGE,
    SET_FETCHING
} from "./types";
import category from "../../../components/pages/shop_main_page/catalog/filter/category/category";

const initialState = {
    data: {},
    id_categories: [],
    currentPage: 1,
    perPage: 24,
    pageCount: 1,
    totalCount: 0,
    isFetched: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage)
            }

        case FILTER_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage)
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                data: action.payload,
                totalCount: action.payload.count,
                isFetched: true,
                pageCount: Math.ceil(action.payload.count / state.perPage)
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
            if (state.id_categories.some(category => category.id === action.payload.id) && (state.id_categories.length !== 0)) {
                console.log(true)
                return state;

            } else {
                return {
                    ...state,
                    id_categories: [...state.id_categories, action.payload]
                }

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


        default:
            return state;

    }
}