import React from 'react';
import styles from './applied.module.scss'
import img from './clean.png'
import {connect} from "react-redux";

function Applied(props) {
    return (
        <div className={styles.applied_block}>
            <div className={styles.name}>
                {props.title}

                <img onClick={() => props.remove_func(props.id)}  src={img} alt=""/>
            </div>
        </div>
    );
}


export default Applied;