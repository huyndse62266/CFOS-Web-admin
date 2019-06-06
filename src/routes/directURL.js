import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ViewStaticOrder from "../pages/Order/ViewStatic/ViewStaticOrder";
import ProductListPage from "../pages/Product/ProductListPage/ProductListPage";
import ViewFeedback from "../pages/Feedback/ViewFeedback";
import StoreListPage from "../pages/Store/StorePage/StoreListPage";
import MenuListPage from "../pages/Menu/MenuListPage/MenuListPage";
import ProductActionPage from "../pages/Product/ProductActionPage/ProductActionPage";
import OrderListPage from '../pages/Order/OrderListPage/OrderListPage';
import StaffListPage from "../pages/Staff/StaffListPage/StaffListPage";
import CategoriesListPage from "../pages/Categories/CategoriesListPage/CategoriesListPage";
import MemberListPage from "../pages/Member/MemberListPage/MemberListPage";
import TransactionListPage from "../pages/Transaction/TransactionListPage/TransactionListPage";
import CancelOderPage from "../pages/CancelOrder/CancelOderPage/CancelOderPage";
class directURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ViewStaticOrder} />
                <Route exact path="/products" component={ProductListPage} />
                <Route exact path="/add" component={ProductActionPage} />
                <Route path="/viewFeedback" component={ViewFeedback} />
                <Route path="/viewInformationStore" component={StoreListPage} />
                <Route path="/menuListPage" component={MenuListPage} />
                <Route path="/orderListPage" component={OrderListPage} />
                <Route path="/staff" component={StaffListPage} />
                <Route path="/categoriesListPage" component={CategoriesListPage} />;
                <Route path="/memberListPage" component={MemberListPage} />;
                <Route path="/transactionListPage" component={TransactionListPage} />;
                <Route path="/cancelOrderPage" component={CancelOderPage} />;
            </div>

        );
    }
}
export default directURL; 