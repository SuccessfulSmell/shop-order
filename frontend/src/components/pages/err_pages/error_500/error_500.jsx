import React from 'react';
import styles from "../error_500/error_500.module.scss";
import img from "../shared/500.svg";
import {NavLink} from "react-router-dom";

function Error500(props) {
    return (
        <div className={styles.error_500}>
            <img className={styles.error_img} src={img} alt={``}></img>
            <div className={styles.error_text}>
                <h2>Упс, что-то пошло не так, мы уже работаем над этим</h2>
            </div>
            <div className={styles.btns}>
                <div className={styles.btn1}>
                    <NavLink to={'/'}><p>На главную</p></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Error500;