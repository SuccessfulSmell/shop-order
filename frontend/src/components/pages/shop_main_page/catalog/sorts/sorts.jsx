import React, {useState} from 'react';
import styles from './sorts.module.scss'
import Select from 'react-select'
import {connect} from "react-redux";
import {
    reset_sort_value,
    set_current_page,
    set_fatching,
    set_sort_value
} from "../../../../../redux/modules/products/actions";
import {API_getProducts} from "../../../../../redux/modules/products/api/get_products";
import {API_getProducts_byCatID} from "../../../../../redux/modules/products/api/get_products_by_catID";
import {API_getProducts_search} from "../../../../../redux/modules/products/api/get_products_search";

const options = [
    { value: 'min_price', label: 'По возрастанию цены' },
    { value: 'max_price', label: 'По убыванию цены' },
    { value: 'max_name', label: 'От А-Я' },
    { value: 'min_name', label: 'От Я-А' },
]



function Sorts(props) {
    const [selectedValue, setSelectedValue] = useState('');


    const handleChange = async e => {
        setSelectedValue(e.value);
        props.set_sort_value(e.value);
        props.set_fatching(false);
        props.set_current_page(1);
        if ((props.products.id_categories.length === 0) && (props.products.searchBy === '')) {
            await props.API_getProducts(props.products.currentPage, e.value);

        } else if (props.products.id_categories.length >= 1) {
            await props.API_getProducts_byCatID(props.products.id_categories[0], props.products.currentPage, e.value);
        } else if (props.products.searchBy !== '') {
            await props.API_getProducts_search(props.products.searchBy, props.products.currentPage, e.value);
        }

    }

    return (
        <div className={styles.sorts}>
            <Select
                className={styles.select_new}
                options={options}
                placeholder="Сортировать по ..."
                value={options.find(obj => obj.value === selectedValue)}
                onChange={handleChange}
            />
            {/*<select name="list1">*/}
            {/*    <option>Сортировка</option>*/}
            {/*    <option>По возрастанию цены</option>*/}
            {/*    <option>По убыванию цены</option>*/}
            {/*    <option>От А-Я</option>*/}
            {/*    <option>От Я-А</option>*/}
            {/*</select>*/}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    set_sort_value,
    reset_sort_value,
    API_getProducts,
    API_getProducts_byCatID,
    set_current_page,
    API_getProducts_search,
    set_fatching,

}

export default connect(mapStateToProps, mapDispatchToProps)(Sorts);