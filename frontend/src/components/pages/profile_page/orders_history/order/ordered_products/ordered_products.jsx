import React from 'react';
import styles from './ordered_products.module.scss'
import OrderedProduct from "./product/ordered_product";
import Total from "./total/total";

function OrderedProducts(props) {
    return (
        <div className={styles.wrapper}>
            {
                (props.orded_products)
                    ? (props.orded_products.length > 0)
                    ? props.orded_products.map((product, index) => (
                        <OrderedProduct key={index} product={product}/>
                    ))
                    : ''
                    : ''
            }
            <Total key={props.id} total_price={props.total_price}/>
        </div>
    );
}

export default OrderedProducts;