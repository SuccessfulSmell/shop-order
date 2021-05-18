import React from 'react';
import styles from './cart.module.scss'
import Products from "./products_to_order/products";
import OrderInfo from "./order_info/order_info";
import {connect} from "react-redux";

function Cart() {
    let products = JSON.parse(localStorage.getItem('products_in_cart')) || []
    return (
        <div className={`container ${styles.cart}`}>
            <Products/>
            {
                products.length >= 1 ? <OrderInfo/> : ''
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);