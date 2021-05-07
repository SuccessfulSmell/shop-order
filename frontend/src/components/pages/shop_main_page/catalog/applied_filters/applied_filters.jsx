import React from 'react';
import styles from './applied_filters.module.scss'
import Applied from "./applied_filter/applied";

function AppliedFilters(props) {
    return (
        <div className={styles.applied}>
                <div className={styles.name}>Фильтры:</div>
                <Applied/>
                <Applied/>
                <Applied/>
        </div>
    );
}

export default AppliedFilters;