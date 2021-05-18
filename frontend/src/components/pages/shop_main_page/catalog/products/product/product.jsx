import styles from './product.module.scss'
import React, {useState} from 'react';
import img from './cart.png'
import img_empty from './empty_img.svg'
import {NavLink} from "react-router-dom";
import {add_product_in_cart} from "../../../../../../redux/modules/products/actions";
import {connect} from "react-redux";

function Product(props) {
    const [display_popup_success, setDisplay_popup_success] = useState(false);
    const [display_popup_fail, setDisplay_popup_fail] = useState(false);
    const [display_popup_unAuth, setDisplay_popup_unAuth] = useState(false);

    const clickHandler = (id, icon, name, desc, price, discount) => {
        if (props.auth.isAuthenticated) {
            if (!props.add_product_in_cart(id, icon, name, desc, price, discount)) {
                setDisplay_popup_fail(false)
                setDisplay_popup_success(true)
                setTimeout(() => {
                    setDisplay_popup_success(false)
                }, 3000);
            } else {
                setDisplay_popup_success(false)
                setDisplay_popup_fail(true)
                setTimeout(() => setDisplay_popup_fail(false), 3000);
            }
        } else {
            setDisplay_popup_unAuth(false);
            setDisplay_popup_unAuth(true);
            setTimeout(() => setDisplay_popup_unAuth(false), 3000);
        }

    }
    return (
        <div className={styles.product}>
            <NavLink to={`/product/${props.id}`} className={styles.link_product}>
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
                        : props.discount > 0
                        ? <div className={`${styles.price} ${styles.sales}`}>{parseFloat(props.price).toFixed(2)}&nbsp;р. <span>{parseFloat(props.price * (1 - (props.discount/100))).toFixed(2)}&nbsp;р.</span></div>
                        : <div className={styles.price}>{parseFloat(props.price).toFixed(2)}&nbsp;р.</div>

                }
                <div className={styles.cart}>
                    <img
                        onClick={() => clickHandler(props.id, props.picture, props.title, props.desc, props.price, props.discount)}
                        className={styles.img_cart} src={img} alt=""/>
                    <div
                        style={{opacity: display_popup_success ? '100%' : '0'}}
                        className={styles.popup_success}>Товар был успешно добален
                    </div>
                    <div
                        style={{opacity: display_popup_fail ? '100%' : '0'}}
                        className={styles.popup_fail}>Произошла ошибка!
                    </div>
                    <div
                        style={{opacity: display_popup_unAuth ? '100%' : '0'}}
                        className={styles.popup_unAuth}>Вы не можете добавлять товар пока не зарегистрировались
                    </div>


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
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);