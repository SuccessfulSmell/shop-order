import img_noData from '../../../../../frontend/src/components/pages/shop_main_page/catalog/products/noData.svg'
import {GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./types";

const initialState = {
    name: null,
    article: null,
    price: null,
    price_rec: null,
    price_opt: null,
    currency: 'BYN',
    product_id: null,
    url: null,
    picture: img_noData,
    description: null,
    available: false,
    provider: 1,
    discount: 0,
    category_name: 'Не определено',
    category_id: null,
    isLoading: true,

}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                ...action.payload.results[0],
                isLoading: false,
            }
        case GET_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                ...initialState,
            }

        default:
            return state;

    }
}