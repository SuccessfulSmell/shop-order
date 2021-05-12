import React from "react";

import {Route, Switch} from "react-router-dom";
import Cart from "./cart/cart";
import OrdersHistory from "./orders_history/orders_history";
import UserData from "./user_data/user_data";
import ChangeUserData from "./change_user_data/change_user_data";

function ProfileRoute(props) {
    return (
        <Switch>
            <Route path={`/profile/cart`}><Cart/></Route>
            <Route path={`/profile/order_history`}><OrdersHistory/></Route>
            <Route path={`/profile/user`}><UserData/></Route>
            <Route path={`/profile/change_user_data`}><ChangeUserData/></Route>
        </Switch>
    );
}

export default ProfileRoute;