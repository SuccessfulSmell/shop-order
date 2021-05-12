import styles from './product.module.scss'
import React from 'react';
import img from './cart.png'
import img_empty from './empty_img.svg'
import {NavLink} from "react-router-dom";

function Product(props) {
    return (
        <div className={styles.product}>
            <NavLink to={`/product/${props.article}`} className={styles.link_product}>
                <div>
                    {props.picture !== 'null'
                        ? <img className={styles.img} src={props.picture} alt=""/>
                        : <img className={styles.img} src={img_empty} alt=""/>
                    }

                </div>
                <div className={styles.title}>
                    {
                        props.title === 'null'
                            ? <div className={styles.title_text}>Нет названия</div>
                            : <div className={styles.title_text}>{props.title.split(' ').slice(0, 3).join(' ')}</div>
                    }


                    {
                        props.desc === 'null'
                            ? <div className={styles.desc_text}>Нет описания</div>
                            : <div className={styles.desc_text}>{props.desc.replaceAll('<br>', '\r\n')}</div>
                    }
                </div>
            </NavLink>
            <div className={styles.price_cart}>
                {
                    props.price === 'null'
                        ? <div className={styles.price}>Уточнить</div>
                        : <div className={styles.price}>{props.price}&nbsp;р.</div>
                }
                <div className={styles.cart}>
                    <img className={styles.img_cart} src={img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Product;