import React from 'react';

import styles from './search.module.scss'

function Search(props) {
    return (
        <form>

        <div className={styles.search}>
            <button type='submit' className={`${styles.icon} ${styles.icon_search}`} > </button>
            {/*TODO: onSubmitHandler for search*/}
            <input className={styles.search_field} type="text" placeholder={`Поиск по каталогу`}/>
            {/*TODO: action -- show clean_btn if input is not empty*/}
            <div className={`${styles.icon} ${styles.icon_clean}`}> </div>
        </div>
        </form>
    );
}

export default Search;