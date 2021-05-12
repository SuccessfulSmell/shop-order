import React from 'react';
import styles from './product.module.scss'

function Product(props) {
    return (
        <div className={styles.product}>
            <div className={styles.remove}></div>
            <div>
                <img className={styles.img} src="https://images.by.prom.st/214025372_w640_h640_molotok-06-kg.jpg" alt=""/>
            </div>
            <div className={styles.product_info}>
                <div className={styles.title}>Title</div>
                <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolores et eum facere, id in ipsam minus obcaecati. Deserunt dolorem error, illum iste nam voluptas. At neque quia saepe voluptate.</div>
            </div>
            <div className={styles.price_info}>
                <div className={styles.price_text}>Стоимость: </div>
                <div className={styles.price}>10p</div>
            </div>
        </div>
    );
}

export default Product;