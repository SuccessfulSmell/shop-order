import React from 'react';
import styles from './link.module.scss'
import {NavLink} from "react-router-dom";


function Link(props) {
    return (
        <div>
            <NavLink className={styles.link} to={`/`}>Каталог</NavLink>
            <NavLink className={styles.link} to={`/profile/user`}>Личный кабинет</NavLink>
            <NavLink className={styles.link} to={`/profile/cart`}>Корзина</NavLink>
        </div>
    );
}

export default Link;