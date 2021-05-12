import React from 'react';
import styles from './logo.module.scss'

function Logo(props) {
    return (
        <div className={styles.logo}>
            <div className={styles.img}>img </div>
            <div className={styles.name}>L O G O</div>
        </div>
    );
}

export default Logo;