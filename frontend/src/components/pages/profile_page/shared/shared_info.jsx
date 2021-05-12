import React from 'react';
import styles from './shared_info.module.scss'
import NavLinks from "./navs_profile/nav_links";
import UserInfo from "./user_info/user_info";

function SharedInfo(props) {
    return (
        <div className={`container`}>
            <UserInfo fio={`UserName UserLastName `} data={`20.02.2007`}/>
            <NavLinks/>
            <div className={styles.sep_line}></div>
        </div>
    );
}

export default SharedInfo;