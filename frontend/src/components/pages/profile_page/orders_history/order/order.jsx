import React from 'react';
import styles from './order.module.scss'
import OrderedProducts from "./ordered_products/ordered_products";

function Order(props) {
    return (
        <div className={styles.order}>
            <div className={styles.order_num}>Заказ 1</div>
            <OrderedProducts/>
        </div>
    );
}

export default Order;