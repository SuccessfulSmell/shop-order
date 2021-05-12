import React from 'react';

import styles from './header.module.scss'
import Logo from "../logo/logo";
import Search from "../search/search";
import NavCatalog from "./nav_catalog/nav_catalog";


function Header(props) {
    return (
        <header>
            <div className={`container ${styles.items}`}>
                <div className={`${styles.header__item}`}><Logo/></div>
                <div className={`${styles.header__item} ${styles.search_item}`}><Search/></div>
                <div className={`${styles.header__item}`}><NavCatalog/></div>
            </div>
        </header>
    );
}

export default Header;