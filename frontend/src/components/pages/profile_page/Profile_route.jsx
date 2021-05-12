import React from "react";

import {Route, Switch} from "react-router-dom";
import Cart from "./cart/cart";
import OrdersHistory from "./orders_history/orders_history";
import UserData from "./user_data/user_data";

function ProfileRoute(props) {
    return (
        <Switch>
            <Route path={`/profile/cart`}><Cart/></Route>
            <Route path={`/profile/order_history`}><OrdersHistory/></Route>
            <Route path={`/profile/User`}><UserData/></Route>
        </Switch>
    );
}

export default ProfileRoute;