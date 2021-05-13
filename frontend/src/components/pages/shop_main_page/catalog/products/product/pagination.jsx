import React, {useEffect} from 'react';
import {API_getProducts} from "../../../../../../redux/modules/products/api/get_products";
import {set_current_page, set_fatching} from "../../../../../../redux/modules/products/actions";
import {connect} from "react-redux";
import styles from "../products.module.scss";
import {API_getProducts_byCatID} from "../../../../../../redux/modules/products/api/get_products_by_catID";
import {API_getProducts_search} from "../../../../../../redux/modules/products/api/get_products_search";

function Pagination(props) {
    const current_page = props.products.currentPage
    const last_page = props.products.pageCount

    let url_arr = ''
    let URL = ''
    let pages = []

    for (let i = 1; i <= props.products.pageCount; i++) {
        pages.push(i);
    }

    useEffect(async () => {
        if ((props.products.id_categories.length === 0) && (props.products.searchBy === '')) {
            await props.API_getProducts(props.products.currentPage);

        } else if (props.products.id_categories.length >= 1) {
            await props.API_getProducts_byCatID(props.products.id_categories[0], props.products.currentPage);
        } else if (props.products.searchBy !== '') {
            await props.API_getProducts_search(props.products.searchBy, props.products.currentPage);
        }


    }, [])

    const onClickPagination = async (page) => {
        if ((current_page === 1) && (last_page > 1)) {

            url_arr = props.products.data.next.split('&')
            URL = url_arr[0].slice(0, -current_page.toString().length)
        }
        if (current_page === 2) {
            url_arr = props.products.data.previous.split('?')
            url_arr[1] ? URL = props.products.data.previous + '&page=' : URL = props.products.data.previous + '?page='
        }
        if ((current_page > 2) && (last_page > 1)) {
            url_arr = props.products.data.previous.split('&')
            URL = url_arr[0].slice(0, -current_page.toString().length)
        }


        props.set_fatching(false);

        if (props.products.searchBy) {
            await props.API_getProducts_search(props.products.searchBy, page);
        } else {
            await props.API_getProducts(url_arr[1] ? page + '&' + url_arr[1] : page);
        }
        props.set_current_page(page);

    }


    return (
        <div>
            {last_page < 5 && last_page > 1
                ? <div className={styles.pagination}>
                    {pages.map((page, index) => (
                        <div
                            className={page === current_page ? styles.current_page : ''}
                            onClick={() => onClickPagination(page)} key={index}>{page}</div>
                    ))}
                </div>
                : ''
            }

            {last_page > 4
                ? <div className={styles.pagination}>
                    {current_page - 1 > 1
                        ? <div onClick={() => onClickPagination(1)}>Начало</div>
                        : ''
                    }
                    {current_page > 1
                        ? <div onClick={() => onClickPagination(current_page - 1)}>{current_page - 1}</div>
                        : ''
                    }

                    <div className={styles.current_page}
                         onClick={() => onClickPagination(current_page)}>{current_page}</div>

                    {current_page + 1 <= last_page
                        ? <div onClick={() => onClickPagination(current_page + 1)}>{current_page + 1}</div>
                        : ''
                    }
                    <div onClick={() => onClickPagination(last_page)}>Конец</div>
                </div>
                : ''
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    API_getProducts,
    API_getProducts_byCatID,
    API_getProducts_search,
    set_current_page,
    set_fatching,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
