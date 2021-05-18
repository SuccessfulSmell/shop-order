import React, {useEffect, useState} from 'react';
import styles from './product_info.module.scss'
import {get_product_by_article} from "../../../../redux/modules/product/actions";
import {connect} from "react-redux";
import loading_img from "../../shop_main_page/catalog/products/loading.svg";
import {add_product_in_cart} from "../../../../redux/modules/products/actions";

function ProductInfo(props) {
    const url = window.location.href.split('/')
    const id = url[url.length - 1]

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

    useEffect(() => {
        props.get_product_by_article(id)
        window.scrollTo(0, 0)
    }, []);
    if (!props.product.isLoading) {
        return (
            <div className={styles.product_info}>

                <div
                    style={{opacity: display_popup_success ? '100%' : '0'}}
                    className={`${styles.popup_success} ${styles.warning_}`}>Товар был успешно добален
                </div>
                <div
                    style={{opacity: display_popup_fail ? '100%' : '0'}}
                    className={`${styles.popup_fail} ${styles.warning_}`}>Произошла ошибка!
                </div>
                <div
                    style={{opacity: display_popup_unAuth ? '100%' : '0'}}
                    className={`${styles.popup_unAuth} ${styles.warning_}`}>Вы не можете добавлять товар пока не
                    зарегистрировались
                </div>

                <div className={styles.title_content}>
                    <div className={styles.img_wrapper}>
                        <img className={styles.img} src={props.product.picture} alt=""/>
                    </div>
                    <div className={styles.title_text}>
                        <div className={styles.name}>
                            <span>{props.product.name.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"').split(' ').slice(0, 3).join(' ')}</span>
                        </div>
                        <div className={styles.desc}>
                            {((props.product.description !== 'null' && props.product.description))
                                ? props.product.description.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"').slice(0, 220)
                                : 'К сожалению, к этому товару нет описания'
                            }
                        </div>

                        <div className={styles.price_block}>
                            {
                                props.product.price === 'null'
                                    ? <div className={styles.price}>Уточнить</div>
                                    : props.product.discount > 0
                                    ? <div className={`${styles.price} ${styles.sales}`}>{props.product.price}&nbsp;р. <span>{parseFloat(props.product.price * (1 - (props.product.discount/100))).toFixed(2)}&nbsp;р.</span></div>
                                    : <div className={styles.price}>{props.product.price}&nbsp;р.</div>

                            }
                            <div
                                onClick={() => clickHandler(props.product.id, props.product.picture, props.product.name, props.product.description, props.product.price, props.products.discount)}
                                className={styles.btn_add_cart}>В корзину
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.main_info_title}><span>Технические характеристики: </span></div>
                <div className={styles.main_info}>
                    {
                        props.product.name === 'null'
                            ? 'Нет названия'
                            : props.product.name + '\r\n'
                    }
                    {((props.product.description !== 'null' && props.product.description))
                        ? props.product.description.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"')
                        : 'К сожалению, к этому товару нет описания'
                    }

                </div>
            </div>
        );
    } else {
        return (
            <div className={`container ${styles.center_block}`}>
                <img className={styles.loading_img_} src={loading_img} alt=""/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        auth: state.auth,
    }
}

const mapDispatchToProps = {
    get_product_by_article,
    add_product_in_cart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);