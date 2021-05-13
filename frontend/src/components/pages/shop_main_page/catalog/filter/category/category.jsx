import React, {useEffect} from 'react';
import styles from './category.module.scss'
import SubCategory from "./sub_category/sub_category";
import {API_getCategories} from "../../../../../../redux/modules/categories/api/get_categories";
import {connect} from "react-redux";


function Category(props) {

    useEffect(() => {
        props.API_getCategories();

    }, [])

    return (
        <div className={styles.category}>
            <div>
                <span className={styles.category_name}>Категории:</span>

                {props.categories.map((category, index) =>
                    (category.sub_category.length > 0)
                        ? <SubCategory
                            key={index}
                            category_name={category.category}
                            sub_categories={category.sub_category}
                        />
                        : ''
                )
                }
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
    API_getCategories,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);