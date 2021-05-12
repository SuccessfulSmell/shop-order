import React from 'react';
import styles from './order_info.module.scss'

// TODO: Price calculating

function OrderInfo(props) {
    return (
        <div className={styles.order_info}>
            <div className={styles.total_block}>
                <div className={`${styles.total_item}`}>
                    <span>Сумма заказа:</span> <br/>
                    <span className={styles.price}>777 р.</span>
                </div>
                <div className={`${styles.total_item}`}>
                    <span>Скидка:</span> <br/>
                    <span className={styles.price}>10%</span>
                </div>
                <div className={styles.sep_line}></div>
                <div className={`${styles.total_item}`}>
                    <span>Итог:</span> <br/>
                    <span className={styles.price}>770 р.</span>
                </div>

                {/*TODO: make this order btn available*/}
                <div className={styles.order_btn}>
                    Заказать
                </div>
            </div>
        </div>
    );
}

export default OrderInfo;