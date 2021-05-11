import React, {useEffect} from 'react';
import {API_getProducts} from "../../../../../../redux/modules/products/api/get_products";
import {set_current_page, set_fatching} from "../../../../../../redux/modules/products/actions";
import {connect} from "react-redux";
import styles from "../products.module.scss";

function Pagination(props) {
    const current_page = props.products.currentPage
    const last_page = props.products.pageCount

    let url_arr = ''
    let URL = ''
    let pages = []

    for (let i = 1; i <= props.products.pageCount; i++) {
        pages.push(i);
    }

    useEffect(() => {
        props.API_getProducts();

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
        await props.API_getProducts(url_arr[1] ? URL + page + '&' + url_arr[1] : URL + page);
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
    set_current_page,
    set_fatching,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
