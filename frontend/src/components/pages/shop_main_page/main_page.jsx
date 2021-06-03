import React from 'react';

import Footer from "../../shared/footer/footer";
import Preview from "./preview/preview";
import Catalog from "./catalog/catalog";
import Adv from "./adv_block/adv";


function MainPage(props) {

    return (
        <div>
            <Preview/>
            <Adv/>
            <Catalog/>
            <Footer/>
        </div>
    );
}

export default MainPage;