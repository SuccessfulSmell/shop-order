import React, {useEffect, useState} from 'react';
import styles from './change_user_data.module.scss'
import {connect} from "react-redux";
import {loadUser} from "../../../../redux/modules/auth/actions";

function ChangeUserData(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [old_pass, setOld_pass] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [error, setError] = useState('');
    let pass_err = '';
    let email_err = '';

    useEffect(() => {
        if (props.auth.user) {
            setLogin(props.auth.user.username);
            setEmail(props.auth.user.email);
            setFirst_name(props.auth.user.first_name);
            setLast_name(props.auth.user.last_name);
        } else {
            setLogin('');
            setEmail('');
            setFirst_name('');
            setLast_name('');
        }
    }, [props]);

    const submitHandler = (event) => {
        event.preventDefault();

        if ((old_pass) && (password)) {
            if (old_pass !== password) {
                pass_err = 'Пароли не совпадают ';
            } else {
                pass_err = '';
            }
        }

        if (!email.includes('@')) {
            email_err = 'Недопустимый Email';
        } else {
            email_err = '';
        }

        setError(pass_err + email_err);

        if (!error) {

        }
    }


    if (props.auth.user) {
        return (
            <div className={`container`}>
                <form onSubmit={event => submitHandler(event)} className={styles.form}>
                    <div className={styles.main_info}>
                        <div className={styles.input_fields}>
                            <div className={styles.input_fields_title}>Email:</div>
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={`Ваш новый Email`}
                                value={login}/>
                        </div>
                        {/*<div className={styles.input_fields}>*/}
                        {/*    <div className={styles.input_fields_title}>Имя:</div>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        onChange={(e) => setFirst_name(e.target.value)}*/}
                        {/*        placeholder={`Введите ваше имя`}*/}
                        {/*        value={first_name}/>*/}
                        {/*</div>*/}
                        {/*<div className={styles.input_fields}>*/}
                        {/*    <div className={styles.input_fields_title}>Фамилия:</div>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        onChange={(e) => setLast_name(e.target.value)}*/}
                        {/*        placeholder={`Введите вашу фамилию`}*/}
                        {/*        value={last_name}/>*/}
                        {/*</div>*/}
                        {/*<div className={styles.input_fields}>*/}
                        {/*    <div className={styles.input_fields_title}>Логин:</div>*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        onChange={(e) => setLogin(e.target.value)}*/}
                        {/*        placeholder={`Введите новый логин`}*/}
                        {/*        value={login}/>*/}
                        {/*</div>*/}
                        <div className={styles.error}>{error}</div>
                    </div>
                    <div className={styles.passwords}>
                        <div className={styles.input_fields}>
                            <div className={styles.input_fields_title}>Ваш старый пароль:</div>
                            <input
                                type="password"
                                onChange={(e) => setOld_pass(e.target.value)}
                                placeholder={`старый пароль`}
                            />
                        </div>
                        <div className={styles.input_fields}>
                            <div className={styles.input_fields_title}>Ваш новый пароль:</div>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={`новый пароль`}
                            />
                        </div>
                    </div>

                    <button className={styles.button} type={"submit"}>Изменить</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserData);