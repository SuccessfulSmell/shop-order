import React from 'react';
import styles from './order_info.module.scss'
import {connect} from "react-redux";


function OrderInfo(props) {

    return (
        <div className={styles.order_info}>
            <div className={styles.total_block}>
                <div className={`${styles.total_item}`}>
                    <span>Сумма заказа:</span> <br/>
                    <span className={styles.price}>{props.products.total_cart}</span>
                </div>
                {props.auth.discount
                ?<div className={`${styles.total_item}`}>
                        <span>Скидка:</span> <br/>
                        <span className={styles.price}>{props.auth.discount}%</span>
                    </div>
                : ''
                }
                <div className={styles.sep_line}></div>
                <div className={`${styles.total_item}`}>
                    <span>Итог: </span> <br/>
                    <span className={styles.price}>{(props.products.total_cart*(1-(props.auth.discount/100))).toFixed(2)}</span>
                </div>

                <div className={styles.order_btn}>
                    Заказать
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

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);