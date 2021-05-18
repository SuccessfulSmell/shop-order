import React from 'react';
import Order from "./order/order";
import {connect} from "react-redux";
import empty from './empty_cart.svg'
import styles from './order_history.module.scss'
import {loadUser} from "../../../../redux/modules/auth/actions";

function OrdersHistory(props) {
    return (
        <div className={`container`}>
            {((props.orders))
                ? (props.orders.length > 0)
                    ? props.orders.map((order) => (
                        <Order
                            key={order.order_id}
                            id={order.order_id}
                            date={order.date_time}
                            total_price={order.total_price}
                            orded_products={order.order_products}
                        />
                    ))
                    : <div className={styles.empty_history}>
                        <span>Вы у нас ещё ничего не заказывали</span>
                        <img src={empty} alt=""/>

                    </div>
                : <div className={styles.empty_history}>
                    <span>Вы у нас ещё ничего не заказывали</span>
                    <img src={empty} alt=""/>

                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.auth.orders
    }
}

const mapDispatchToProps = {
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);