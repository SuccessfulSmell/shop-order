import React from 'react';
import styles from './products.module.scss'
import Product from "./product/product";
import {add_product_in_cart, remove_product_from_cart} from "../../../../../redux/modules/products/actions";
import {connect} from "react-redux";
import img_warning from "./empty_cart.svg";
import {loadUser} from "../../../../../redux/modules/auth/actions";

function Products(props) {
    let products = JSON.parse(localStorage.getItem('products_in_cart'))


    return (
        <div className={styles.products}>
            {products
                ? (products.length >= 1)
                    ? products.map((product, index) =>
                        <Product
                            key={index}
                            id={product.id}
                            count={product.count}
                            icon={product.icon}
                            name={product.name}
                            desc={product.desc}
                            price={product.price}
                            discount={product.discount}
                            remove_func={props.remove_product_from_cart}
                        />)
                    : <div className={styles.warning}>
                        <div>Ваша корзина пуста</div>
                        <img src={img_warning} alt=""/>
                    </div>
                : <div className={styles.warning}>
                    <div>Ваша корзина пуста</div>
                    <img src={img_warning} alt=""/>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products,
        auth: state.auth,
    }
}

const mapDispatchToProps = {
    add_product_in_cart,
    remove_product_from_cart,
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);