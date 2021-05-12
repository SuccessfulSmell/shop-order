import React from 'react';
import styles from './applied_filters.module.scss'
import Applied from "./applied_filter/applied";
import {API_getProducts} from "../../../../../redux/modules/products/api/get_products";
import {remove_category_filter} from "../../../../../redux/modules/products/actions";
import {connect} from "react-redux";

function AppliedFilters(props) {
    return (
        <div className={styles.applied}>
            <div className={styles.name}>Фильтры:</div>
            {props.products.id_categories.map((category) => (
                <Applied key={category.id} id={category.id} title={category.title}
                />
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    remove_category_filter,
    API_getProducts,

}

export default connect(mapStateToProps, mapDispatchToProps)(AppliedFilters);