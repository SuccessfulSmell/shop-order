import React from 'react';
import styles from './preview.module.scss'
import Auth from "./navs/nav_auth/auth";
import Logo from "./logo/logo";
import Title from "./title/title";
import CatalogBtn from "./navs/nav_catalog/catalog_btn";
import {connect} from "react-redux";
import ProfileNavs from "./navs/navs_profile/profileNavs";

function Preview(props) {
    return (
        <div>
            <div className={styles.bg}> </div>
            <div className={styles.header_menu}>
                <div className={`container-md ${styles.header_content}`}>
                    <Logo/>
                    <div className={styles.auth_block}>
                        {props.isLoading
                            ? ''
                            : props.isAuthenticated
                                ? <ProfileNavs/>
                                : <Auth/>
                        }

                    </div>
                </div>

            </div>
            <div className={`${styles.preview} container-md`}>

                <div className={styles.main_info}>
                    <Title/>
                    <CatalogBtn/>
                </div>


            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.isAuthenticated,
        isLoading: state.auth.isLoading,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);