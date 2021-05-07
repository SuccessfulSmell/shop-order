import React from 'react';
import ErrorRouter from "./ErrorRouter";
import Header from "../../shared/header/header";
import Footer from "../../shared/footer/footer";
import styles from './Error.module.scss'

function Error(props) {
    return (
        <div>
            <Header/>
            <div className={`container-xl ${styles.error_block}`}>
                <ErrorRouter/>
            </div>
            <Footer/>
        </div>
    );
}

export default Error;