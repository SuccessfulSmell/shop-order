import React from 'react';
import styles from './ordered_products.module.scss'
import OrderedProduct from "./product/ordered_product";
import Total from "./total/total";

function OrderedProducts(props) {
    return (
        <div className={styles.wrapper}>
            <OrderedProduct/>
            <OrderedProduct/>
            <OrderedProduct/>
            <Total/>

        </div>
    );
}

export default OrderedProducts;