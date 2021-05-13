import React from 'react';

import {NavLink} from "react-router-dom";
import styles from './nav_catalog.module.scss'

function NavCatalog(props) {
    return (
        <div className={styles.nav_btn}>
            <NavLink className={styles.nav_link} to={`/#catalog`}><p>Каталог</p></NavLink>
        </div>
    );
}

export default NavCatalog;