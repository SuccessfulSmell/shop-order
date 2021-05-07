import React from 'react';
import styles from './logo.module.scss'
import {NavLink} from "react-router-dom";


function Logo(props) {
    return (
        <NavLink className={styles.logo_link} to={'/'}>
            <div className={styles.logo}>
                <div className={styles.logo__img}>IMG</div>
                <div className={styles.logo__text}>LOGO</div>
            </div>
        </NavLink>
    );
}

export default Logo;