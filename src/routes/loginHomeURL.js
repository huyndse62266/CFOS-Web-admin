import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ViewStaticOrder from "../pages/Order/ViewStatic/ViewStaticOrder";
import LoginForm from "../pages/LoginPage/LoginForm";

class directURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ViewStaticOrder} />
                <Route exact path="/login" component={LoginForm} />            
            </div>

        );
    }
}
export default directURL; 