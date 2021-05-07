import React from 'react';
import styles from './catalog.module.scss'
import Products from "./products/products";
import Search from "../../../shared/search/search";
import Filter from "./filter/fiter";
import AppliedFilters from "./applied_filters/applied_filters";
import Sorts from "./sorts/sorts";

function Catalog(props) {
    return (
        <div className={`container-md ${styles.catalog_block}`}>
            <div className={styles.search}>
                <Search/>
            </div>

            <div className={styles.catalog}>
                <Filter/>
                <Products/>
            </div>
        </div>
    );
}

export default Catalog;