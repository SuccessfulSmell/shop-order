import {GET_ADV, GET_ALL_CATEGORIES, GET_ALL_GROUPS, GET_ALL_SALES, GET_SITE_INFO} from "./types";

const initialState = {
    data: [],
    groups: [],
    adv: [],
    sales: [],
    info: [],
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                data: action.payload,
            }
        case GET_ALL_GROUPS:
            return {
                ...state,
                groups: action.payload,
            }
        case GET_ADV:
            return {
                ...state,
                adv: action.payload,
            }
        case GET_ALL_SALES:
            return {
                ...state,
                sales: action.payload,
            }
        case GET_SITE_INFO:
            return {
                ...state,
                info: action.payload,
            }
        default:
            return state;

    }
}