import React, {useState} from 'react';
import styles from './login.module.scss';
import img from './login_2.svg'
import {NavLink, Redirect} from "react-router-dom";
import {loadUser, login, logout} from "../../../../redux/modules/auth/actions";
import {connect} from "react-redux";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(username, password);
        props.loadUser();
    }


    return (
        <div className={styles.login}>
            {props.isAuthenticated
                ? <Redirect to={`/`}/>
                : ''
            }
            <form onSubmit={handleSubmit} className={styles.login_block}>
                <div className={styles.img_block}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.form_content}>
                    <div>
                        <div>Email:</div>
                        <input
                            className={styles.input}
                            onChange={(event) => setUsername(event.target.value)}
                            type="text"
                            placeholder={`Ваш Email`}
                        />
                    </div>

                    <div>
                        <div>Пароль:</div>
                        <input
                            className={styles.input}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            placeholder={`Ваш пароль`}
                        />
                    </div>
                    <div className={styles.error}>
                        {error}
                        {
                            props.auth.error ? 'Неверный логин или пароль' : ''
                        }
                    </div>
                    <button type={'submit'}>Войти</button>
                    <NavLink to={`/auth/signUp`} className={styles.link}>Нет аккаунта?</NavLink>
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
    login,
    logout,
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);