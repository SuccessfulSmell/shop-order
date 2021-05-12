import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/shop_main_page/main_page";
import Product from "./pages/product_page/product";
import Error from "./pages/err_pages/Error";
import Profile from "./pages/profile_page/Profile";
import Login from "./pages/auth/login/login";
import SingUp from "./pages/auth/singUp/singUp";
import {connect} from "react-redux";

function Index(props) {
    return (
        <Switch>
            <Route exact path="/"><MainPage/></Route>
            <Route exact path="/auth/login"><Login/></Route>
            <Route exact path="/auth/signUp"><SingUp/></Route>
            <Route path="/product"><Product/></Route>

            {props.auth.token
                ? <Route path="/profile"><Profile/></Route>
                : <Redirect to={`/auth/login`}/>
            }

            <Route path="/error"><Error/></Route>

            <Route path="/"><Error/></Route>
        </Switch>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        token: state.auth.token,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Index);