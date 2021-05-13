import React from 'react';
import styles from './discount.module.scss'

function Discount(props) {
    if (props.discount !== 0) {


        return (
            <div className={styles.discount}>
                {/*TODO: this field comes from request*/}
                <div className={styles.user_discount}>
                    <div className={styles.percent}>{props.discount}%</div>
                    <div>Скидка</div>
                </div>

            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}




export default Discount;