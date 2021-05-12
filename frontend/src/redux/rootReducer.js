import {combineReducers} from "redux";
import {productsReducer} from "./modules/products/productsReducer";
import {categoryReducer} from "./modules/categories/categoriesReducer";
import {authReducer} from "./modules/auth/authReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoryReducer,
    auth: authReducer,
})