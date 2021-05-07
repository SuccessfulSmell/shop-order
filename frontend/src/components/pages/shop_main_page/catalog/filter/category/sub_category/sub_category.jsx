import React from 'react';
import styles from './sub_category.module.scss'

function SubCategory(props) {
    return (
        <div className={styles.category_list}>
            <details>
                <summary className={styles.list_title}>Садовые инструменты</summary>
                <div>Ножницы</div>
                <div>Коса</div>
                <div>Газонокосилка</div>
            </details>
        </div>
    );
}

export default SubCategory;