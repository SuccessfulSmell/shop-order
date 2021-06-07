import React, {useEffect} from 'react';
import styles from './logo.module.scss'
import img from './maintenance.svg'
import {get_site_info} from "../../../../../redux/modules/categories/actions";
import {connect} from "react-redux";

function Logo(props) {
    useEffect(() => {
        props.get_site_info();
    }, []);
    return (
        <div className={styles.logo}>
            <div className={styles.img}>
                <img src={img} alt=""/>
                <div className={styles.name}>T O O L S</div>
            </div>


            {
                props.info.length > 0
                    ?
                    <div className={styles.phones}>
                        <div>{props.info[0].contact_phone}</div>
                        <div>{props.info[0].logist_phone}</div>
                    </div>
                    : ''
            }
        </div>
    );
}

const mapStateToProps = state =>
{
    return {
        info: state.categories.info,
    }
}

const mapDispatchToProps =
{
    get_site_info,
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);