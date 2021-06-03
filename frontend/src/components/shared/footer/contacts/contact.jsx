import React from 'react';
import styles from './contact.module.scss'

function Contact(props) {
    return (
        <div>
            {
                props.info.length > 0
                    ?
                    <span className={styles.contact_info}>
                        {props.info[0].address}
                        <br/> <br/>
                        Моб.тел: {props.info[0].logist_phone} <br/>
                        Тел: {props.info[0].contact_phone} <br/>
                        Почта: cargomol@mail.ru <br/>
                    </span>
                    : ''

            }


        </div>
    );
}

export default Contact;