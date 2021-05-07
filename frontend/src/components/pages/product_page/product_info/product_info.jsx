import React from 'react';
import styles from './product_info.module.scss'

function ProductInfo(props) {
    return (
        <div className={styles.product_info}>
            <div className={styles.title_content}>
                <div className={styles.img_wrapper}>
                    <img className={styles.img} src="https://images.by.prom.st/214025372_w640_h640_molotok-06-kg.jpg" alt=""/>
                </div>
                <div className={styles.title_text}>
                    <div className={styles.name}><span>Молоток</span></div>
                    <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid commodi cupiditate doloremque dolores doloribus dolorum eos est iste neque nisi placeat vitae voluptatum! Ad earum eos molestiae pariatur quam.</div>

                    <div className={styles.price_block}>
                        <div className={styles.price}>15&nbsp;р.</div>
                        <div className={styles.btn_add_cart}>В корзину</div>
                    </div>
                </div>

            </div>
            <div className={styles.main_info_title}><span>Технические характеристики: </span></div>
            <div className={styles.main_info}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis culpa deserunt facilis iste itaque, maiores nisi, porro quia quidem, quos rem sint ullam voluptas voluptate. Blanditiis corporis deserunt dolor, dolorum ducimus enim error excepturi fugiat id impedit, magni molestias odio omnis pariatur perferendis sequi tenetur. Animi autem dignissimos ea est ex facere hic impedit in iusto libero nisi numquam perferendis praesentium quam rem sed veritatis, voluptate? Accusantium aperiam commodi dignissimos dolorem eaque earum error expedita, hic ipsum necessitatibus nobis officia officiis omnis perspiciatis ratione sint ut vel voluptatibus. Ad delectus distinctio dolor doloribus odit provident quo veritatis vero voluptatem?
            </div>
        </div>
    );
}

export default ProductInfo;