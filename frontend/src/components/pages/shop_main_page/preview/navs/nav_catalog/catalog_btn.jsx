import React from 'react';
import styles from './catalog_btn.module.scss';


function CatalogBtn(props) {
    return (
        <div className={styles.link_body}>
            <div className={styles.link_text}>Каталог</div>
        </div>
    );
}

export default CatalogBtn;