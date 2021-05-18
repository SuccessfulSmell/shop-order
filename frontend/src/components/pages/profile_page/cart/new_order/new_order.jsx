import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import styles from "./new_order.module.scss";
import Select from "react-select";
import Products from "./products/products";
import {add_order} from "../../../../../redux/modules/products/actions";
import {loadUser} from "../../../../../redux/modules/auth/actions";

function NewOrder(props) {
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [pay_type, setPay_type] = useState('');
    const [error, setError] = useState('');

    let products = JSON.parse(localStorage.getItem('products_in_cart'))
    let total
    debugger;
    props.auth.discount > 0
        ? total = ((1 - (props.auth.discount / 100)) * parseFloat(props.products.total_cart)).toFixed(2)
        : total = parseFloat(props.products.total_cart).toFixed(2)


    const options = [
        {value: 'Наличные', label: 'Наличными'},
        {value: 'Картой', label: 'Картой'},
    ]

    const handleChange = e => {
        setPay_type(e.value);
    }

    const submitHandler = async (e) => {
        let error_text = ''
        if (!email.includes('@')) {
            error_text += '\n\rНедопустимый email'
        }
        if (!phone.includes('+375')) {
            error_text += '\n\rНедопустимый формат номера телефона'
        }
        if (!pay_type) {
            error_text += '\n\rВыберите тип оплаты'
        }
        setError(error_text)
        e.preventDefault()

        if (!error_text) {
            await props.add_order(products, total, email, first_name, last_name, comment, address, phone, pay_type)
            await localStorage.removeItem('products_in_cart')
            window.location.href = '/profile/order_history'
        }

    }


    useEffect(() => {
        if (props.auth.user) {
            setEmail(props.auth.user.username);
            setFirst_name(props.auth.user.first_name);
            setLast_name(props.auth.user.last_name);
        }
    }, [props]);

    return (
        <div className={`container`}>

            <Products/>
            <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
                <div className={styles.main_info}>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Email:</div>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={`Ваш Email`}
                            value={email}
                            required
                        />
                    </div>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Имя:</div>
                        <input
                            type="text"
                            onChange={(e) => setFirst_name(e.target.value)}
                            placeholder={`Ваше имя`}
                            required
                            value={first_name}/>
                    </div>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Фамилия:</div>
                        <input
                            type="text"
                            onChange={(e) => setLast_name(e.target.value)}
                            placeholder={`Ваша фамилия`}
                            required
                            value={last_name}/>
                    </div>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Комментарий к заказу:</div>
                        <input
                            type="text"
                            onChange={(e) => setComment(e.target.value)}
                            placeholder={`Ваш комментарий`}
                            value={comment}/>
                    </div>


                </div>
                <div className={styles.main_info}>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Адрес:</div>
                        <input
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder={`Адрес доставки`}
                            required
                            value={address}/>
                    </div>
                    <div className={styles.input_fields}>
                        <div className={styles.input_fields_title}>Номер телефона:</div>
                        <input
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={`Ваш номер телефона +375...`}
                            required
                            value={phone}/>
                    </div>
                    <Select
                        options={options}
                        className={styles.select}
                        placeholder={`Тип\u00a0оплаты...`}
                        value={options.find(obj => obj.value === pay_type)}
                        required
                        onChange={handleChange}
                    />
                    <button className={styles.button} type={"submit"}>Оформить заказ</button>
                    <div className={styles.error}>{error}</div>
                </div>


            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products,
        auth: state.auth,
    }
}

const mapDispatchToProps = {
    add_order,
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);