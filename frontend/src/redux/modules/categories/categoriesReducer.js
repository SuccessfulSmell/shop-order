import {GET_ALL_CATEGORIES, GET_ALL_GROUPS} from "./types";

const initialState = {
    data: [],
    groups: [],
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
        default:
            return state;

    }
}