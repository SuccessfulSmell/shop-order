import styles from './product.module.scss'
import React from 'react';
import img from './cart.png'

function Product(props) {
    return (
        <div className={styles.product}>
            <div className="">
            <div>
                <img className={styles.img} src="https://instrumentn.ru/wp-content/uploads/2018/05/molotok.jpg" alt=""/>
            </div>
            <div className={styles.title}>
                <div className={styles.title_text}>Title</div>

                <div className={styles.desc_text}> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            </div>
            </div>
            <div className={styles.price_cart}>
                <div className={styles.price}>28&nbsp;р.</div>
                <div className={styles.cart}>
                    <img className={styles.img_cart} src={img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Product;