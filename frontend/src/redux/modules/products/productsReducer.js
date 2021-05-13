import {
    ADD_CATEGORY_FILTER,
    FILTER_PRODUCTS,
    GET_PRODUCTS,
    REMOVE_ALL_CATEGORY_FILTER,
    REMOVE_CATEGORY_FILTER,
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
            return{
                ...state,
                sortBy: '',
            }


        default:
            return state;

    }
}