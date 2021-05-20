import React from 'react';
import styles from './logo.module.scss'
import {NavLink} from "react-router-dom";
import img from './maintenance.svg'


function Logo(props) {
    return (
        <NavLink className={styles.logo_link} to={'/'}>
            <div className={styles.img}>
                <img src={img} alt=""/>
                <div>T O O L S</div>
            </div>
        </NavLink>
    );
}

export default Logo;