import {GET_ALL_CATEGORIES} from "./types";

const initialState = {
    data: [],

}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;

    }
}