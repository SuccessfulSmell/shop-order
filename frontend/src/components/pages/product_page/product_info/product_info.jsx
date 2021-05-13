import React, {useEffect} from 'react';
import styles from './product_info.module.scss'
import {get_product_by_article} from "../../../../redux/modules/product/actions";
import {connect} from "react-redux";
import loading_img from "../../shop_main_page/catalog/products/loading.svg";

function ProductInfo(props) {
    const url = window.location.href.split('/')
    const id = url[url.length - 1]


    useEffect(() => {
        props.get_product_by_article(id)
        window.scrollTo(0, 0)
    }, []);
    if (!props.product.isLoading) {
        return (
            <div className={styles.product_info}>
                <div className={styles.title_content}>
                    <div className={styles.img_wrapper}>
                        <img className={styles.img} src={props.product.picture} alt=""/>
                    </div>
                    <div className={styles.title_text}>
                        <div className={styles.name}>
                            <span>{props.product.name.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"').split(' ').slice(0, 3).join(' ')}</span>
                        </div>
                        <div className={styles.desc}>
                            {((props.product.description !== 'null' && props.product.description))
                                ? props.product.description.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"').slice(0, 220)
                                : 'К сожалению, к этому товару нет описания'
                            }
                        </div>

                        <div className={styles.price_block}>
                            <div className={styles.price}>{props.product.price}&nbsp;р.</div>
                            <div className={styles.btn_add_cart}>В корзину</div>
                        </div>
                    </div>

                </div>
                <div className={styles.main_info_title}><span>Технические характеристики: </span></div>
                <div className={styles.main_info}>
                    {
                        props.product.name === 'null'
                            ? 'Нет названия'
                            : props.product.name + '\r\n'
                    }
                    {((props.product.description !== 'null' && props.product.description))
                        ? props.product.description.replaceAll('<br>', '\r\n').replaceAll('&quot;', '"')
                        : 'К сожалению, к этому товару нет описания'
                    }

                </div>
            </div>
        );
    } else {
        return (
            <div className={`container ${styles.center_block}`}>
                <img className={styles.loading_img_} src={loading_img} alt=""/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
    }
}

const mapDispatchToProps = {
    get_product_by_article,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);