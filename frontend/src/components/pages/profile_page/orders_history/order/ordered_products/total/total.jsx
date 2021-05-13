import React from 'react';
import styles from './total.module.scss'

function Total(props) {
    return (
        <div className={styles.total}>
            Итог: <span className={styles.total_price}> {props.total_price}&nbsp;р.</span>
        </div>
    );
}

export default Total;