import React from 'react';
import styles from './catalog_btn.module.scss';


function CatalogBtn(props) {
    return (
        <a className={styles.link_} href="#catalog">
        <div className={styles.link_body}>
            <div className={styles.link_text}>Каталог</div>
        </div>
        </a>
    );
}

export default CatalogBtn;