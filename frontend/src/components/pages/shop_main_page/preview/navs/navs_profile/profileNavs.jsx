import React from 'react';
import styles from './profileNavs.module.scss'
import {NavLink} from "react-router-dom";
import {logout} from "../../../../../../redux/modules/auth/actions";
import {connect} from "react-redux";

function ProfileNavs(props) {
    return (
        <div className={styles.auth}>
            <NavLink to={'/profile/user'} className={styles.signup}>Личный кабинет</NavLink>
            <NavLink to={'/profile/cart'} className={styles.login}>
                Корзина
                {
                    props.products.products_in_cart.length > 0
                        ? Object.keys(props.products.products_in_cart[0]).length !== 0
                        ? <div className={styles.img}>{props.products.products_in_cart.length}</div>
                        : ''
                        : ''

                }

            </NavLink>
        </div>);
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
        products: state.products,
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavs);