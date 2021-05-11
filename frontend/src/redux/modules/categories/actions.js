import {GET_ALL_CATEGORIES} from "./types";

export const all_categories = data => ({
    type: GET_ALL_CATEGORIES,
    payload: data,
})