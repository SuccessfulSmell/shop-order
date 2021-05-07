import React from 'react';
import styles from './products.module.scss'
import Product from "./product/product";
import AppliedFilters from "../applied_filters/applied_filters";
import Sorts from "../sorts/sorts";

function Products(props) {
    return (
        <div className={styles.products}>

            <div className={styles.filters}>
                <AppliedFilters/>
                <Sorts/>
            </div>

            <div className={styles.products_block}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className={`${styles.pagination}`}>
            {/*    TODO: add pagination block*/}
            </div>
        </div>
    );
}

export default Products;