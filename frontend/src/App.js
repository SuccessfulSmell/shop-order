import React, {useEffect} from 'react';

import Index from "./components";
import {loadUser} from "./redux/modules/auth/actions";
import {connect} from "react-redux";

function App(props) {
    useEffect(() => {
        props.loadUser();
    })
    return (
        <div>
            <Index/>
        </div>
    );
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    loadUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
