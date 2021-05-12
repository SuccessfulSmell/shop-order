import React from 'react';
import styles from './ordered_product.module.scss'

function OrderedProduct(props) {
    return (
        <div className={styles.block}>
            <div className={`${styles.field}`}>
                <img className={`${styles.img}`} src="https://images.by.prom.st/214025372_w640_h640_molotok-06-kg.jpg" alt=""/>
            </div>

            <div className={styles.field}>
                Наименование: <span className={styles.title}>Молоток</span>
            </div>

            <div className={styles.field}>
                Количество: <span className={styles.count}>2&nbsp;шт.</span>
            </div>

            <div className={styles.field}>
                Цена за 1&nbsp;шт. : <span className={styles.price}>15&nbsp;р.</span>
            </div>

            <div className={styles.field}>
                Итоговая сумма: <span className={styles.total}>30&nbsp;р.</span>
            </div>
            <div className={styles.sep_line}></div>
        </div>
    );
}

export default OrderedProduct;