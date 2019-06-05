import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ViewStatic from './../../pages/Order/ViewStatic/ViewStaticOrder';
import ProductListPage from './../../pages/Product/ProductListPage/ProductListPage';
import ViewFeedback from './../../pages/Feedback/ViewFeedback';
import ViewInformationStore from './../../pages/Store/StorePage/ViewInformationStore';
import MenuListPage from './../../pages/Menu/MenuListPage/MenuListPage';
import ProductActionPage from './../../pages/Product/ProductActionPage/ProductActionPage';
class MenuProduct extends Component {
    render() {
        return (
            <Router>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo">
                        <Link to="/">
                            <div className="simple-text logo-normal">
                                CFOS
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="nav-item active  ">
                                <Link className="nav-link" to="/">
                                    <i className="material-icons">dashboard</i>
                                    <p>View Static</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/viewInformationStore">
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products" >
                                    <i className="material-icons">content_paste</i>
                                    <p>Food</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/menuListPage" >
                                    <i className="material-icons">menu</i>
                                    <p>Menu</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/viewFeedback">
                                    <i className="material-icons">feedback</i>
                                    <p>View Feedback</p>
                                </Link>
                            </li>
                            {/* <li className="nav-item active ">
                                <a className="nav-link" >
                                    <i className="material-icons">notifications</i>
                                    <p>Notifications</p>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div>
                    <Route exact path="/" component={ViewStatic} />
                    <Route path="/products" component={ProductListPage} />
                    <Route path="/viewFeedback" component={ViewFeedback} />
                    <Route path="/viewInformationStore" component={ViewInformationStore} />
                    <Route path="/menuListPage" component={MenuListPage} />
                    <Route path="/products/add" component={ProductActionPage} />
                </div>
            </Router>
        );
    }
}
export default MenuProduct;