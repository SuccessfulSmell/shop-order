import React from 'react';
import styles from './sorts.module.scss'
import SortBy from "./sort_by/sort_by";

function Sorts(props) {
    return (
        <div className={styles.sorts}>
            <select name="list1">
                <option>По возрастанию цены</option>
                <option>По возрастанию цены</option>
                <option>По возрастанию цены</option>
                <option><SortBy/></option>
            </select>
        </div>
    );
}

export default Sorts;