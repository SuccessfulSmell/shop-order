import React from 'react';
import styles from './category.module.scss'
import SubCategory from "./sub_category/sub_category";

function Category(props) {
    return (
        <div className={styles.category}>
            <div>
                <span className={styles.category_name}>Тип:</span>
                    <SubCategory/>
                    <SubCategory/>
                    <SubCategory/>
            </div>
        </div>
    );
}

export default Category;