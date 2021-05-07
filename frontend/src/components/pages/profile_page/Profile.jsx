import React from 'react';
import ProfileRoute from "./Profile_route";
import Footer from "../../shared/footer/footer";
import Header from "../../shared/header/header";
import SharedInfo from "./shared/shared_info";
import styles from './Profile.module.scss'


function Profile(props) {
    return (
        <div>
            <Header/>
            <div className={styles.content_block}>
                <SharedInfo/>
                <ProfileRoute/>
            </div>
            <Footer/>
        </div>
    );
}

export default Profile;