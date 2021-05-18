import React from 'react';
import styles from './product.module.scss'
import img from './empty_img.svg'
import {
    add_product_in_cart,
    dec_product_cart,
    inc_product_cart,
    remove_product_from_cart
} from "../../../../../../redux/modules/products/actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

function Product(props) {
    const onInc = () => {
        props.inc_product_cart(props.id)
    }
    const onDec = () => {

        props.dec_product_cart(props.id)
    }

    return (
        <div className={styles.product}>
            <div onClick={() => props.remove_product_from_cart(props.id)} className={styles.remove}> </div>
            <NavLink to={`/product/${props.id}`}>
                {props.icon
                    ? <img className={styles.img} src={props.icon}
                           alt=""/>
                    : <img className={styles.img} src={img}
                           alt=""/>
                }

            </NavLink>
            <div className={styles.product_info}>
                {
                    props.name !== 'null'
                        ? <div className={styles.title}>{props.name.split(' ').slice(0, 7).join(' ')}</div>
                        : <div className={styles.title}>Нет данных</div>
                }
                {
                    props.desc !== 'null'
                        ? <div
                            className={styles.desc}>{props.desc.replaceAll('<br>', ' ').split(' ').slice(0, 20).join(' ')}</div>
                        : <div className={styles.desc}>Нет данных</div>
                }
            </div>

            <div className={styles.price_info}>
                <div className={styles.price_text}>Стоимость:</div>
                <div className={styles.price}>{(props.price * props.count).toFixed(2)}&nbsp;р.</div>
            </div>
            <div className={styles.price_info}>
                <div className={styles.price_text}>Количество:</div>
                <div className={styles.price_block}>
                    <div onClick={() => onInc()} className={styles.price_plus}> +</div>
                    <div className={styles.price}>{props.count}&nbsp;шт.</div>
                    <div onClick={() => onDec()} className={styles.price_minus}> -</div>
                </div>

            </div>
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
    dec_product_cart,
    inc_product_cart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);