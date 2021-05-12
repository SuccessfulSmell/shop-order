import React from 'react';
import NavBtn from "./nav_link/nav_link";
import styles from './nav_links.module.scss'

function NavLinks(props) {
    return (
        <div className={styles.nav_container}>
            <NavBtn path={`/profile/user`} text={`Личные данные`}/>
            <NavBtn path={`/profile/order_history`} text={`История заказов`}/>
            <NavBtn path={`/profile/cart`} text={`Корзина`}/>
        </div>
    );
}

export default NavLinks;