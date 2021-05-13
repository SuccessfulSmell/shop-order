import React from 'react';
import styles from './user_info.module.scss'
import Discount from "../discount/discount";
import {connect} from "react-redux";
import {logout} from "../../../../../redux/modules/auth/actions";

function UserInfo(props) {
    const onClick = async () => {
        await props.logout();
    }

    return (
        <div className={styles.content}>
            <Discount discount={props.discount}/>
            <div className={styles.fio}>{props.fio}</div>
            <div className={styles.data}>Дата регистрации: {props.data}</div>
            <div onClick={onClick} className={`${styles.data} ${styles.exit}`}><span>Выйти</span></div>

        </div>
    );
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);