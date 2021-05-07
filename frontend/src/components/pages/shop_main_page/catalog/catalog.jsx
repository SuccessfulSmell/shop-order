import React from 'react';
import styles from './catalog.module.scss'
import Products from "./products/products";
import Search from "../../../shared/search/search";
import Filter from "./filter/fiter";

function Catalog(props) {
    return (
        <div>
            <div className={styles.search}>
                <Search/>
            </div>
            <Filter/>
            <Products/>
        </div>
    );
}

export default Catalog;