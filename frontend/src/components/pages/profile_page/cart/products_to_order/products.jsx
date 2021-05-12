import React from 'react';
import styles from './products.module.scss'
import Product from "./product/product";

function Products(props) {
    return (
        <div className={styles.products}>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export default Products;