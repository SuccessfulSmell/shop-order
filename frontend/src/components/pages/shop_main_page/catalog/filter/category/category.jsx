import React, {useEffect} from 'react';
import styles from './category.module.scss'
import SubCategory from "./sub_category/sub_category";
import {API_getCategories} from "../../../../../../redux/modules/categories/api/get_categories";
import {connect} from "react-redux";
import {get_groups} from "../../../../../../redux/modules/categories/actions";
import style_sum from './sub_category/sub_category.module.scss'

function Category(props) {

    useEffect(() => {
        props.API_getCategories();
        props.get_groups();


    }, [])

    return (
        <div className={styles.category}>
            <div>
                <span className={styles.category_name}>Категории:</span>
                {props.categories.groups.map((group, index) => (
                    <div className={styles.group_block}>
                        {
                            group.icon
                                ? <img src={group.icon} alt=""/>
                                : ''

                        }

                        <details key={index} className={styles.group}>
                            <summary className={style_sum.list_title}>{group.name}</summary>
                            {group.sub_category.map((category, index) =>
                                (category.sub_category.length > 0)
                                    ? <SubCategory
                                        key={index}
                                        category_name={category.category}
                                        sub_categories={category.sub_category}
                                    />
                                    : ''
                            )
                            }
                        </details>
                    </div>
                ))}

                {/*{props.categories.data.map((category, index) =>*/}
                {/*    (category.sub_category.length > 0)*/}
                {/*        ? <SubCategory*/}
                {/*            key={index}*/}
                {/*            category_name={category.category}*/}
                {/*            sub_categories={category.sub_category}*/}
                {/*        />*/}
                {/*        : ''*/}
                {/*)*/}
                {/*}*/}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = {
    API_getCategories,
    get_groups,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);