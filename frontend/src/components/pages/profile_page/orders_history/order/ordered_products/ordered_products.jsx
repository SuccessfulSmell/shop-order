import React from 'react';
import styles from './ordered_products.module.scss'
import OrderedProduct from "./product/ordered_product";
import Total from "./total/total";
import {connect} from "react-redux";
import {loadUser} from "../../../../../../redux/modules/auth/actions";

function OrderedProducts(props) {
    if (props.auth.isLoading){
        return (
            <div> </div>
        )
    } else {

    return (
        <div className={styles.wrapper}>
            {
                (props.orded_products)
                    ? (props.orded_products.length > 0)
                    ? props.orded_products.map((product, index) => (
                        <OrderedProduct key={index} product={product}/>
                    ))
                    : ''
                    : ''
            }
            <Total key={props.id} total_price={props.total_price}/>
        </div>
    );}
}

const mapStateToProps = state => {
    return {
        products: state.products,
        auth: state.auth,
    }
}

const mapDispatchToProps = {
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderedProducts);