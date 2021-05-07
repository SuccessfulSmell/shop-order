import React from 'react';

import {Switch, Route} from "react-router-dom";
import MainPage from "./pages/shop_main_page/main_page";
import Product from "./pages/product_page/product";
import Error from "./pages/err_pages/Error";
import Profile from "./pages/profile_page/Profile";


function Index(props) {
    return (
        <Switch>
            <Route exact path="/"><MainPage/></Route>
            <Route path="/product"><Product/></Route>
            <Route path="/profile"><Profile/></Route>
            <Route path="/error"><Error/></Route>

            <Route path="/"><Error/></Route>
        </Switch>
    );
}

export default Index;