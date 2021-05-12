import React from 'react';

import styles from './footer.module.scss'
import Contact from "./contacts/contact";
import Logo from "./logo/logo";
import Map from "./map/map";

function Footer(props) {
    return (
        <footer>
            <div className={"container " + styles.content}>
                <Logo/>
                <Map/>

                {/*TODO: rendering map is about 1 sec*/}
                {/*Discourse next: should we leave it here?*/}


                <Contact/>
            </div>
        </footer>
    );
}

export default Footer;