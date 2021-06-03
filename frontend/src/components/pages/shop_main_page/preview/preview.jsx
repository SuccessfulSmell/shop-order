import React from 'react';
import styles from './preview.module.scss'
import Auth from "./navs/nav_auth/auth";
import Logo from "./logo/logo";
import './slider.scss'
import {connect} from "react-redux";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ProfileNavs from "./navs/navs_profile/profileNavs";
import img_1 from './imgs/a_1.jpeg'
import img_2 from './imgs/a_2.jpeg'
import img_3 from './imgs/a_3.jpeg'
import img_4 from './imgs/a_4.jpeg'
import img_5 from './imgs/a_5.jpeg'
import img_6 from './imgs/a_6.jpeg'
import img_7 from './imgs/a_7.jpg'
import img_8 from './imgs/a_8.jpg'
import img_9 from './imgs/a_9.jpg'

function Preview(props) {
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
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_1} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_2} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_3} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_4} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_5} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_6} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_7} alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_8}  alt=""/></div>
                    <div className={styles.slider_item}>
                        <div className={styles.text_block}>
                            <div className={styles.text}>Some text</div>
                            <div className={styles.sub_text}>some subtext</div>
                        </div>
                        <img src={img_9}  alt=""/></div>
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
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);