import React, {useEffect, useState} from 'react';

import styles from './search.module.scss'
import img from './buttons/clear/clean.png'
import {API_getProducts_search} from "../../../redux/modules/products/api/get_products_search";
import {
    remove_all_category_filters,
    set_current_page,
    set_fatching,
    set_sort_value
} from "../../../redux/modules/products/actions";
import {connect} from "react-redux";
import {API_getProducts} from "../../../redux/modules/products/api/get_products";
import {Redirect} from "react-router-dom";

function Search(props) {
    const [text, setText] = useState('');
    const [isRedirect, setIsRedirect] = useState('');
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
            props.set_sort_value()
            await props.API_getProducts_search(text)
        } else {
            props.set_fatching(false)
            props.set_current_page(1)
            props.set_sort_value()
            props.remove_all_category_filters()
            await props.API_getProducts()
        }
        setIsRedirect((window.location.href !== '/'));
    }


    return (

        <form onSubmit={handleSubmit}>
            {
                isRedirect
                    ? <Redirect to={'/'}/>
                    : ''
            }
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
    set_sort_value,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);