import React from 'react';
import styles from './ordered_product.module.scss'
import noData from './noData.svg'

function OrderedProduct(props) {
    return (
        <div className={styles.block}>
            <div className={`${styles.field}`}>
                {
                    props.product.picture
                        ? <img className={`${styles.img}`} src={props.product.picture} alt=""/>
                        : <img className={`${styles.img}`} src={noData} alt=""/>
                }

            </div>

            <div className={styles.field}>
                {
                    props.product.product_name
                        ? <div>Наименование:<span
                            className={styles.title}>{props.product.product_name.split(' ').slice(0, 5)}</span></div>

                        : 'Нет данных'
                }

            </div>

            <div className={styles.field}>
                {
                    props.product.product_count
                        ? <div>Количество:<span className={styles.count}>{props.product.product_count}&nbsp;шт.</span>
                        </div>
                        : 'Нет данных'
                }

            </div>

            <div className={styles.field}>
                {
                    props.product.price
                        ? <div>Цена за 1&nbsp;шт.:<span className={styles.price}>{props.product.price}&nbsp;р.</span>
                        </div>
                        : 'Нет данных'
                }

            </div>

            <div className={styles.field}>
                {
                    props.product.price && props.product.product_count
                        ? <div>
                            Итоговая сумма:
                            <span className={styles.total}>
                                {(props.product.price * props.product.product_count).toFixed(2)}&nbsp;р.
                            </span>
                        </div>
                        : 'Нет данных'
                }

            </div>
            <div className={styles.sep_line}> </div>
        </div>
    );
}

export default OrderedProduct;