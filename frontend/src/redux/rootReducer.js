import {combineReducers} from "redux";
import {productsReducer} from "./modules/products/productsReducer";
import {categoryReducer} from "./modules/categories/categoriesReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoryReducer,
})