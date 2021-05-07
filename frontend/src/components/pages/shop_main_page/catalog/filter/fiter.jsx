import React from 'react';
import styles from './filter.module.scss'
import Category from "./category/category";

function Filter(props) {
    return (
        <div className={styles.filter}>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
        </div>
    );
}

export default Filter;