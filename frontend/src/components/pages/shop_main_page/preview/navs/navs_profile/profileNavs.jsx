import React from 'react';
import styles from './profileNavs.module.scss'
import {NavLink} from "react-router-dom";
import {logout} from "../../../../../../redux/modules/auth/actions";
import {connect} from "react-redux";

function ProfileNavs(props) {
    const handleClick = (event) => {
        props.logout();
    }


    return (
        <div className={styles.auth}>
            <NavLink to={'/profile/user'} className={styles.signup}>Личный кабинет</NavLink>
            <NavLink to={'/profile/cart'} className={styles.login}>Корзина</NavLink>
        </div>);
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavs);