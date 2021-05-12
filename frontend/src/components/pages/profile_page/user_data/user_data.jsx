import React from 'react';
import styles from './user_data.module.scss'
import {connect} from "react-redux";
import loading_img from "../../shop_main_page/catalog/products/loading.svg";

function UserData(props) {
    if (props.auth.user) {
        return (
            <div className={`container ${styles.all_page}`}>

                <div className={styles.field_name}>
                    <span className={styles.title}>Email:</span>

                    <span className={styles.filed_value}>
                    {
                        props.auth.user.email
                            ? props.auth.user.email
                            : 'Нет данных'
                    }
                </span>

                    <div className={styles.change}>изменить личные данные</div>
                </div>

                <div className={styles.field_name}>
                    <span className={styles.title}>Имя:</span>
                    <span className={styles.filed_value}>
                {
                    props.auth.user.first_name
                        ? props.auth.user.first_name
                        : 'Нет данных'
                }
                </span>
                </div>

                <div className={styles.field_name}>
                    <span className={styles.title}>Фамилия:</span>
                    <span className={styles.filed_value}>
                {
                    props.auth.user.last_name
                        ? props.auth.user.last_name
                        : 'Нет данных'
                }
                </span>
                </div>

                <div className={styles.field_name}>
                    <span className={styles.title}>Логин:</span>
                    <span className={styles.filed_value}>
                {
                    props.auth.user.username
                        ? props.auth.user.username
                        : 'Нет данных'
                }
                </span>
                </div>

                <div className={styles.field_name}>
                    <span className={styles.title}>Пароль:</span>
                    <span className={styles.filed_value}>***********</span>

                </div>

            </div>
        );
    } else {
        return (
            <div className={`container`}>
                <img className={`${styles.img}`} src={loading_img} alt=""/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);