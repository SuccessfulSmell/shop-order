import React from 'react';

import {Route, Switch} from "react-router-dom";
import Error404 from "./error_404/error_404";
import Error500 from "./error_500/error_500";

function ErrorRouter(props) {
    return (
        <Switch>
            <Route path={`/error/404`}><Error404/></Route>
            <Route path={`/error/500`}><Error500/></Route>

            <Route path={`/`}><Error404/></Route>
        </Switch>
    );
}

export default ErrorRouter;