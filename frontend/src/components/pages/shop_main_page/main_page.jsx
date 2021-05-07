import React from 'react';

import styles from './main_page.module.scss'
import Footer from "../../shared/footer/footer";
import Preview from "./preview/preview";
import Catalog from "./catalog/catalog";


function MainPage(props) {
    return (
        <div>
            <Preview/>
            <Catalog/>
            <Footer/>
        </div>
    );
}

export default MainPage;