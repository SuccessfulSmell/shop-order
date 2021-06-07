import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './adv.module.scss'
import {get_all_sales} from "../../../../redux/modules/categories/actions";

function Adv(props) {
    useEffect(() => {
        props.get_all_sales();
    }, []);

    return (
        <div>
            {
                props.sales_list.length > 0
                    ?
                    <div className={styles.sales}>
                        <div className={styles.sales_block}>
                        <div className={`container-md ${styles.cont}`}>
                            <div className={styles.title}>Только сейчас! Скидки на следующие категории:</div>
                            {
                                props.sales_list.map((sale, index) => (
                                    <div className={styles.sale} key={index}>{sale.sub_category} - <span>{sale.discount}%</span></div>
                                ))
                            }
                        </div>
                        </div>
                    </div>
                    : ''
            }

        </div>
    );

}

const mapStateToProps = state => {
    return {
        sales_list: state.categories.sales,
    }
}

const mapDispatchToProps = {
    get_all_sales,
}

export default connect(mapStateToProps, mapDispatchToProps)(Adv);