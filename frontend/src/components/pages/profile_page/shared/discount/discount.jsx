import React from 'react';
import styles from './discount.module.scss'

function Discount(props) {
    return (
        <div className={styles.discount}>
            {/*TODO: this field comes from request*/}
            <div className={styles.user_discount}>
                <div className={styles.percent}>10%</div>
                <div>Скидка</div>
            </div>

        </div>
    );
}

export default Discount;