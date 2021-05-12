import React from 'react';
import styles from './cart.module.scss'
import Products from "./products_to_order/products";
import OrderInfo from "./order_info/order_info";

function Cart(props) {
    return (
        <div className={`container ${styles.cart}`}>
            <Products/>
            <OrderInfo/>
        </div>
    );
}

export default Cart;