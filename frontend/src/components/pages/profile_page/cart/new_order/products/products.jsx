import React from 'react';
import {connect} from "react-redux";
import styles from './products.module.scss'
import {NavLink} from "react-router-dom";

function Products(props) {
    let products = JSON.parse(localStorage.getItem('products_in_cart'))

    return (
        <div className={styles.products}>
            <div className={styles.title}>Информация о заказе:</div>
            <div className={styles.product}>
                <div className={`${styles.name} ${styles.name_cat}`}>Наименование</div>
                <div className={`${styles.count} ${styles.name_cat}`}>Количество</div>
                <div className={`${styles.price} ${styles.name_cat}`}>Стоимость</div>
            </div>

            {products
                ? (products.length >= 1)
                    ? products.map(product => (
                        <div className={styles.product}>
                            <div className={styles.name}><NavLink
                                to={`/product/${product.id}`}>{product.name.split(' ').slice(0, 5).join(' ')}</NavLink>
                            </div>
                            <div className={styles.count}>{product.count}</div>
                            <div className={styles.price}>{product.price}&nbsp;р.</div>
                        </div>
                    ))
                    : ''
                : ''
            }
            <div className={styles.total_price}>
                <div className={styles.total_price_title}>Итоговая стоимость: <br/> <span
                    className={styles.price_text}>{parseFloat(props.products.total_cart).toFixed(2)}&nbsp;р.</span></div>
                {props.auth.discount > 0
                    ? <div className={styles.total_price_discount}>С учетом вашей скидки: <br/> <span
                        className={styles.price_text}>{((1 - (props.auth.discount / 100)) * parseFloat(props.products.total_cart)).toFixed(2)}&nbsp;р.</span>
                    </div>
                    : ''
                }

            </div>
            <div className={styles.title}>Оформление заказа:</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products,
        auth: state.auth,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Products);