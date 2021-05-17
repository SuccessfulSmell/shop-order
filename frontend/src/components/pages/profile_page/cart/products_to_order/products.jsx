import React from 'react';
import styles from './products.module.scss'
import Product from "./product/product";
import {add_product_in_cart, remove_product_from_cart} from "../../../../../redux/modules/products/actions";
import {connect} from "react-redux";
import img_warning from "./empty_cart.svg";

function Products(props) {
    let products =  JSON.parse(localStorage.getItem('products_in_cart'))


    return (
        <div className={styles.products}>
            {products
                ?(products.length >= 1)
                    ?products.map(product =>
                        <Product
                            key={product.id}
                            id={product.id}
                            count={product.count}
                            icon={product.icon}
                            name={product.name}
                            desc={product.desc}
                            price={product.price}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);