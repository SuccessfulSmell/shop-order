import React from 'react';
import styles from './user_info.module.scss'
import Discount from "../discount/discount";

function UserInfo(props) {
    return (
        <div className={styles.content}>
            <Discount/>
            <div className={styles.fio}>{props.fio}</div>
            <div className={styles.data}>Дата регистрации: {props.data}</div>

        </div>
    );
}

export default UserInfo;