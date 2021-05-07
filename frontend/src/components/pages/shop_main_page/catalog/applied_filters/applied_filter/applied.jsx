import React from 'react';
import styles from './applied.module.scss'

function Applied(props) {
    return (
        <div className={styles.applied_block}>
            <div className={styles.name}>
                Садовые инструменты
            </div>
        </div>
    );
}

export default Applied;