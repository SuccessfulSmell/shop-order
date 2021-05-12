import {combineReducers} from "redux";
import {productsReducer} from "./modules/products/productsReducer";
import {categoryReducer} from "./modules/categories/categoriesReducer";
import {authReducer} from "./modules/auth/authReducer";
import {productReducer} from "./modules/product/productReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    categories: categoryReducer,
    auth: authReducer,
})