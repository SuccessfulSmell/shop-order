import React from 'react';
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import ProductInfo from "./product_info/product_info";
import styles from './product.module.scss'


function Product(props) {

    return (
        <div>
            <Header/>
            <div className={`${styles.content_block} container-xl`}>
                <ProductInfo/>
            </div>
            <Footer/>
        </div>
    );
}


export default Product