import React from 'react';
import styles from './applied.module.scss'
import img from './clean.png'
import {connect} from "react-redux";
import {remove_category_filter, set_current_page, set_fatching} from "../../../../../../redux/modules/products/actions";
import {API_getProducts} from "../../../../../../redux/modules/products/api/get_products";

function Applied(props) {
    let onClickHandler = (id) => {
        props.set_fatching(false);
        props.API_getProducts();
        props.remove_category_filter(id);
        props.set_current_page(1);

    }

    return (
        <div className={styles.applied_block}>
            <div className={styles.name}>
                {props.title}

                <img onClick={() => onClickHandler(props.id)} src={img} alt=""/>
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        categories: state.categories.data
    }
}

const mapDispatchToProps = {
    remove_category_filter,
    API_getProducts,
    set_fatching,
    set_current_page,
}

export default connect(mapStateToProps, mapDispatchToProps)(Applied);