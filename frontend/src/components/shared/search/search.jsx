import React, {useEffect, useState} from 'react';

import styles from './search.module.scss'
import img from './buttons/clear/clean.png'
import {API_getProducts_search} from "../../../redux/modules/products/api/get_products_search";
import {remove_all_category_filters, set_current_page, set_fatching} from "../../../redux/modules/products/actions";
import {connect} from "react-redux";
import {API_getProducts} from "../../../redux/modules/products/api/get_products";

function Search(props) {
    const [text, setText] = useState('');
    useEffect(() => {
        if (props.products.searchBy) {
            setText(props.products.searchBy)
        } else {
            setText('')
        }
    }, [props]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (text) {
            props.set_fatching(false)
            props.set_current_page(1)
            props.remove_all_category_filters()
            await props.API_getProducts_search(text)
        } else {
            props.set_fatching(false)
            props.set_current_page(1)
            props.remove_all_category_filters()
            await props.API_getProducts()

        }
    }


    return (
        <form onSubmit={handleSubmit}>

            <div className={styles.search}>
                <button type='submit'
                        className={`${styles.icon} ${styles.icon_search}`}> </button>

                <input className={styles.search_field}
                       type="text"
                       placeholder={`Поиск по каталогу`}
                       value={text}
                       onChange={(event => setText(event.target.value))}
                />
                {text
                    ? <img onClick={() => setText('')} src={img} alt=""/>
                    : ""
                }

            </div>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    set_current_page,
    set_fatching,
    remove_all_category_filters,
    API_getProducts_search,
    API_getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);