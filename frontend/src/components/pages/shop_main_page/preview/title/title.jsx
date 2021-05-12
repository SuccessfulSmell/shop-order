import React from 'react';
import styles from './title.module.scss'

function Title(props) {
    return (
        <div className={styles.title}>
            <div className={styles.main_text}>
                Лучшие предложения! <br/>
                Быстрая доставка
            </div>
            <div className={styles.sep_line}></div>
            <div className={styles.sub_text}>
                Выбирая нас <br/>
                вы выбираете качество
            </div>
        </div>
    );
}

export default Title;