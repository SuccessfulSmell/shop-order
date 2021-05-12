import React from 'react';
import styles from './error_404.module.scss'
import img from '../shared/404.svg'
import {NavLink} from "react-router-dom";

function Error404(props) {
    return (
        <div className={styles.error_404}>
            <img className={styles.error_img} src={img} alt={``}></img>
            <div className={styles.error_text}>
                <h2>Мы не смогли ничего найти по вашему запросу</h2>
            </div>
            <div className={styles.btns}>
                <div className={styles.btn1}>
                    <NavLink to={'/'}><p>На главную</p></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Error404;