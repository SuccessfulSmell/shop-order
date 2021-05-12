import React from 'react';

import styles from './products.module.scss'
import img_warning from './noData.svg'
import Product from "./product/product";
import AppliedFilters from "../applied_filters/applied_filters";
import Sorts from "../sorts/sorts";
import {API_getProducts} from "../../../../../redux/modules/products/api/get_products";
import {connect} from "react-redux";
import loading_img from './loading.svg'
import {set_current_page, set_fatching} from "../../../../../redux/modules/products/actions";
import Pagination from "./product/pagination";

function Products(props) {


    return (
        <div className={styles.products}>

            <div className={styles.filters}>
                <AppliedFilters/>
                <Sorts/>
            </div>

            <Pagination/>


            <div className={styles.products_block}>
                {props.products.isFetched
                    ? (props.products.data.results.length > 0)
                        ? props.products.data.results.map(product =>
                            <Product
                                key={product.product_id}
                                id={product.product_id}
                                title={product.name}
                                desc={product.description}
                                picture={product.picture}
                                category_name={product.category_name}
                                price={product.price}
                                article={product.article}
                            />)
                        : <div className={styles.warning}>
                            <div>Мы не смогли ничего найти по вашему запросу</div>
                            <img src={img_warning} alt=""/>
                        </div>
                    : <img className={styles.loading_img_} src={loading_img} alt=""/>
                }


            </div>

            <Pagination/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    API_getProducts,
    set_current_page,
    set_fatching,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);