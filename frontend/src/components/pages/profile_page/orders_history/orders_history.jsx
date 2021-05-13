import React from 'react';
import Order from "./order/order";
import {connect} from "react-redux";

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
                    : ''
                : ''
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.auth.orders
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersHistory);