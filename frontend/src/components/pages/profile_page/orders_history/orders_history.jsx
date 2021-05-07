import React from 'react';
import styles from './order_history.module.scss'
import Order from "./order/order";

function OrdersHistory(props) {
    return (
        <div className={`container`}>
            <Order/>
            <Order/>
        </div>
    );
}

export default OrdersHistory;