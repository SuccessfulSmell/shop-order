import React, {useEffect} from 'react';

import styles from './footer.module.scss'
import Contact from "./contacts/contact";
import Logo from "./logo/logo";
import Map from "./map/map";
import {get_site_info} from "../../../redux/modules/categories/actions";
import {connect} from "react-redux";

function Footer(props) {
    useEffect(() => {
        props.get_site_info();
    }, []);

    return (
        <footer>
            <div className={"container " + styles.content}>
                <Logo/>
                <Map/>

                {/*TODO: rendering map is about 1 sec*/}
                {/*Discourse next: should we leave it here?*/}


                <Contact info={props.info}/>
            </div>
        </footer>
    );
}


const mapStateToProps = state => {
    return {
        info: state.categories.info,
    }
}

const mapDispatchToProps = {
    get_site_info,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);