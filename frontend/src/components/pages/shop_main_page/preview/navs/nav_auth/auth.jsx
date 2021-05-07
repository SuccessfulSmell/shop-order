import React from 'react';
import styles from './auth.module.scss'

function Auth(props) {
    return (
        <div className={styles.auth}>
            <div className={styles.signup}>Регистрация</div>
            <div className={styles.login}>Войти</div>

        </div>
    );
}

export default Auth;