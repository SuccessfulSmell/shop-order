import React from 'react';
import styles from './sub_category.module.scss'
import {connect} from "react-redux";
import {API_getProducts_byCatID} from "../../../../../../../redux/modules/products/api/get_products_by_catID";
import {
    add_filter_category,
    set_current_page,
    set_fatching,
    set_sort_value
} from "../../../../../../../redux/modules/products/actions";


function SubCategory(props) {
    let categories = []

    const onClickCategory = async (sub_category) => {
        props.add_filter_category(sub_category);
        categories.push(sub_category)
        props.set_fatching(false)
        await props.API_getProducts_byCatID(categories[0]);
        set_sort_value('');
        props.set_current_page(1);
        categories = props.products.id_categories
    }


    return (
        <div className={styles.category_list}>
            <details>
                <summary className={styles.list_title}>{props.category_name}</summary>
                {props.sub_categories.map((sub_category) =>
                    <div onClick={() =>
                        onClickCategory({id: sub_category.id, title: sub_category.sub_category})} key={sub_category.id}>
                        <span className={styles.category_btn}>{sub_category.sub_category}</span>
                    </div>
                )}
            </details>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        categories: state.categories.data,
        products: state.products,
    }
}

const mapDispatchToProps = {
    API_getProducts_byCatID,
    set_current_page,
    set_fatching,
    add_filter_category,
    set_sort_value,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);