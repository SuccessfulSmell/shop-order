import React from 'react';
import styles from './preview.module.scss'
import Auth from "./navs/nav_auth/auth";
import Logo from "./logo/logo";
import Title from "./title/title";
import CatalogBtn from "./navs/nav_catalog/catalog_btn";
import img from './bg_img/2290-500x500.png'

function Preview(props) {
    return (
        <div>
            <div className={styles.bg}>
                {/*<img className={styles.img} src={img} alt=""/>*/}
            </div>
            <div className={`${styles.preview} container-md`}>
                <div className={styles.main_info}>
                    <Logo/>
                    <Title/>
                    <CatalogBtn/>
                </div>

                <div className={styles.auth_block}>
                    <Auth/>
                </div>
            </div>
        </div>
    );
}

export default Preview;