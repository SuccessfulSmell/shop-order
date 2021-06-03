import React from 'react';
import Link from "../nav_links/link";
import styles from './logo.module.scss'

function Logo(props) {
    return (
        <div>
            <p className={styles.logo_name}>T O O L S</p>
            <Link/>
        </div>
    );
}

export default Logo;