import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';
import { Constants, RouteMap } from './utils/constants';
import Login from './page/login/Login';
import NotFound from './page/NotFound';
import ViewStaticOrder from './page/Order/ViewStatic/ViewStaticOrder';
import ProductListPage from './page/Product/ProductListPage/ProductListPage';
import ViewFeedback from './page/Feedback/ViewFeedback';
import StoreListPage from './page/Store/StorePage/StoreListPage';
import ProductActionPage from './page/Product/ProductActionPage/ProductActionPage';
import OrderListPage from './page/Order/OrderListPage/OrderListPage';
import StaffListPage from './page/Staff/StaffListPage/StaffListPage';
import CategoriesListPage from './page/Categories/CategoriesListPage/CategoriesListPage';
import MemberListPage from './page/Member/MemberListPage/MemberListPage';
import TransactionListPage from './page/Transaction/TransactionListPage/TransactionListPage';
import CancelOderPage from './page/CancelOrder/CancelOderPage/CancelOderPage';
import CreateFoodCourt from './page/CreateFoodCourt/CreateFoodCourt/CreateFoodCourt';

const Routes = ({ location }) => {
  // const token = cookie.get(Constants.TOKEN);
  // if (!token && location.pathname !== RouteMap.ROUTE_LOGIN) {
  //   return <Redirect to={RouteMap.ROUTE_LOGIN} />;
  // }
  return (
    <Switch>
      <Route
        exact
        path={RouteMap.ROUTE_DASHBOARD}
        component={ViewStaticOrder}
      />
      <Route exact path={RouteMap.ROUTE_LOGIN} component={Login} />
      <Route exact path={RouteMap.ROUTE_PRODUCTS} component={ProductListPage} />
      <Route exact path={RouteMap.ROUTE_ADD} component={ProductActionPage} />
      <Route exact path={RouteMap.ROUTE_FEEDBACK} component={ViewFeedback} />
      <Route
        exact
        path={RouteMap.ROUTE_STORE_INFOMATION}
        component={StoreListPage}
      />
      <Route exact path={RouteMap.ROUTE_CREATE_FOODCOURT} component={CreateFoodCourt} />
      <Route exact path={RouteMap.ROUTE_ORDER} component={OrderListPage} />
      <Route exact path={RouteMap.ROUTE_STAFF} component={StaffListPage} />
      <Route
        exact
        path={RouteMap.ROUTE_CATEGORIES}
        component={CategoriesListPage}
      />
      ;
      <Route exact path={RouteMap.ROUTE_MEMBER} component={MemberListPage} />;
      <Route
        exact
        path={RouteMap.ROUTE_TRANSACTION}
        component={TransactionListPage}
      />
      ;
      <Route
        exact
        path={RouteMap.ROUTE_CANCEL_ORDER}
        component={CancelOderPage}
      />
      ;
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
