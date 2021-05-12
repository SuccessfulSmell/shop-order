import React from 'react';
import styles from './auth.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../../../../redux/modules/auth/actions";

function Auth(props) {

    return (
        <div className={styles.auth}>
            <NavLink to={'/auth/signUp'} className={styles.signup}>Регистрация</NavLink>
            <NavLink to={'/auth/login'} className={styles.login}>Войти</NavLink>

        </div>
    );
}


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);