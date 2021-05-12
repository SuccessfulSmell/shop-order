import React, {useState} from 'react';
import styles from './signUp.module.scss';
import img from "../login/login_3.svg";
import {NavLink, Redirect} from "react-router-dom";
import {register} from "../../../../redux/modules/auth/actions";
import {connect} from "react-redux";

function SingUp(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [error, setError] = useState('');


    const onSubmit = (event) => {
        let pass_err = '';
        let email_err = '';
        event.preventDefault();
        if (passwordCheck) {
            if (passwordCheck !== password) {
                pass_err = 'Пароли не совпадают ';
            } else {
                pass_err = '';
            }
        }

        if (!username.includes('@')) {
            email_err = 'Недопустимый Email';
        } else {
            email_err = '';
        }

        setError(pass_err + email_err);

        if (!error) {
            props.register(username, password);
        }
    }

    return (
        <div className={styles.login}>
            {props.isAuthenticated
                ? <Redirect to={`/`}/>
                : ''
            }
            <form onSubmit={(event) => onSubmit(event)} className={styles.login_block}>
                <div className={styles.img_block}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.form_content}>
                    <div>
                        <div>Email:</div>
                        <input
                            onChange={(event) => setUsername(event.target.value)}
                            className={styles.input}
                            type="text"
                            placeholder={`Ваш email`}
                        />
                    </div>

                    <div>
                        <div>Пароль:</div>
                        <input
                            onChange={(event) => setPassword(event.target.value)}
                            className={styles.input}
                            type="password"
                            placeholder={`Ваш пароль`}
                        />
                    </div>
                    <div>
                        <div>Подтвердить пароль:</div>
                        <input
                            onChange={(event) => {
                                setPasswordCheck(event.target.value);
                            }}
                            className={styles.input}
                            type="password"
                            placeholder={`Подтвердить пароль`}
                        />
                    </div>
                    <div className={styles.error}>
                        {error}
                    </div>
                    <button type={'submit'}>Зарегистрироваться</button>
                    <NavLink to={`/auth/login`} className={styles.link}>Уже есть аккаунт</NavLink>
                </div>

            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        isAuthenticated: state.auth.isAuthenticated,

    }
}

const mapDispatchToProps = {
    register,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp);