import React, {useEffect} from 'react';
import styles from './preview.module.scss'
import Auth from "./navs/nav_auth/auth";
import Logo from "./logo/logo";
import './slider.scss'
import {connect} from "react-redux";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ProfileNavs from "./navs/navs_profile/profileNavs";
import {get_adv} from "../../../../redux/modules/categories/actions";

function Preview(props) {
    useEffect(() => {
        props.get_adv();
    }, []);


    return (
        <div>
            {/*<div className={styles.bg}> </div>*/}
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

                {/*<div className={styles.main_info}>*/}
                {/*    <Title/>*/}
                {/*    <CatalogBtn/>*/}
                {/*</div>*/}

                <AwesomeSlider>
                    {
                        props.adv.length > 0
                            ? props.adv.map((adv, index) => (
                                <div key={index} className={styles.slider_item}>
                                    <div className={styles.text_block}>
                                        <div className={styles.text}>{adv.title}</div>
                                        <div className={styles.sub_text}>{adv.about_info}</div>
                                    </div>
                                    <img src={adv.photo} alt=""/>
                                </div>
                            ))
                            : <div></div>
                    }
                </AwesomeSlider>


            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.isAuthenticated,
        isLoading: state.auth.isLoading,
        adv: state.categories.adv,
    }
}

const mapDispatchToProps = {
    get_adv,
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);