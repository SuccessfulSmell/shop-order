import React from 'react';
import styles from './order.module.scss'
import OrderedProducts from "./ordered_products/ordered_products";

function Order(props) {
    return (
        <div className={styles.order}>
            <div className={styles.order_num}>Заказ {props.id}</div>
            <OrderedProducts
                key={props.id}
                id={props.id}
                date={props.date}
                total_price={props.total_price}
                orded_products={props.orded_products}
            />
        </div>
    );
}

export default Order;