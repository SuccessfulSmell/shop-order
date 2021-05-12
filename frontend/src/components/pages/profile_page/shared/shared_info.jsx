import React from 'react';
import styles from './shared_info.module.scss'
import NavLinks from "./navs_profile/nav_links";
import UserInfo from "./user_info/user_info";
import {connect} from "react-redux";

function SharedInfo(props) {
    if (props.auth.user) {
        return (
            <div className={`container`}>
                <UserInfo
                    fio={
                        `${props.auth.user.first_name ? props.auth.user.first_name : 'Нет данных'}
                        ${props.auth.user.last_name ? props.auth.user.last_name : 'Нет данных'}`
                    } data={`20.02.2007`}/>
                <NavLinks/>
                <div className={styles.sep_line}></div>
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SharedInfo);