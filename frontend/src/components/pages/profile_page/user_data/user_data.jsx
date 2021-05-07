import React from 'react';
import styles from './user_data.module.scss'

function UserData(props) {
    return (
        <div className={`container ${styles.all_page}`}>
            <div className={styles.field_name}>
                <span className={styles.title}>Email:</span> <span className={styles.filed_value}>SomeOne@mail.ru</span>

                <div className={styles.change}>изменить email</div>
            </div>

            <div className={styles.field_name}>
                <span className={styles.title}>Имя:</span> <span className={styles.filed_value}>FirstName</span>
            </div>

            <div className={styles.field_name}>
                <span className={styles.title}>Фамилия:</span> <span className={styles.filed_value}>LastName</span>
            </div>

            <div className={styles.field_name}>
                <span className={styles.title}>Логин:</span> <span className={styles.filed_value}>SomeUserName</span>
            </div>

            <div className={styles.field_name}>
                <span className={styles.title}>Пароль:</span> <span className={styles.filed_value}>***********</span>

                <div className={styles.change}>изменить пароль</div>
            </div>

        </div>
    );
}

export default UserData;