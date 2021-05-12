import React from 'react';
import styles from './nav_link.module.scss'
import {NavLink} from "react-router-dom";

function NavBtn(props) {
    return (

        <NavLink activeClassName={styles.active_link} className={styles.link_body} to={props.path}>
            <div className={styles.link_text}>
                {props.text}
            </div>
        </NavLink>

    );
}

export default NavBtn;