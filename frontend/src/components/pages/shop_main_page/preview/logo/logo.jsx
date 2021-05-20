import React from 'react';
import styles from './logo.module.scss'
import img from './maintenance.svg'

function Logo(props) {
    return (
        <div className={styles.logo}>
            <div className={styles.img}>
                <img src={img} alt=""/>
                <div className={styles.name}>T O O L S</div>
            </div>

            <div className={styles.phones}>
                <div>+375 (29) 999-99-11</div>
                <div>+375 (29) 123-13-11</div>
            </div>
        </div>
    );
}

export default Logo;