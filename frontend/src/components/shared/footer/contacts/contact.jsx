import React from 'react';
import styles from './contact.module.scss'

function Contact(props) {
    return (
        <div>
            <span className={styles.contact_info}>
                    Республика Беларусь <br/>
                    Минская обл. Молодечненский р-н, д. Красное, ул.1Мая д.78
                    УНН 690387122
                    <br/> <br/>
                    Моб.тел: + 375 (29) 760-18-59 <br/>
                    Тел: +375 (17) 679-62-25 <br/>
                    Почта: cargomol@mail.ru <br/>
            </span>
        </div>
    );
}

export default Contact;