import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ViewStaticOrder from "../pages/Order/ViewStatic/ViewStaticOrder";
import ProductListPage from "../pages/Product/ProductListPage/ProductListPage";
import ViewFeedback from "../pages/Feedback/ViewFeedback";
import ViewInformationStore from "../pages/Store/StorePage/ViewInformationStore";
import MenuListPage from "../pages/Menu/MenuListPage/MenuListPage";
import ProductActionPage from "../pages/Product/ProductActionPage/ProductActionPage";
class directURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ViewStaticOrder} />
                <Route exact path="/products" component={ProductListPage} />
                <Route path="/viewFeedback" component={ViewFeedback} />
                <Route path="/viewInformationStore" component={ViewInformationStore} />
                <Route path="/menuListPage" component={MenuListPage} />
                <Route exact path="/add" component={ProductActionPage} />
            </div>

        );
    }
}
export default directURL; 