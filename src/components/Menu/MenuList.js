import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MenuList extends Component {
    render() {
        return (
            <div>
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
                                <Link className="nav-link" to="/staff">
                                    <i className="material-icons">person</i>
                                    <p>Management Staff</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/memberListPage">
                                    <i className="material-icons">how_to_reg</i>
                                    <p>Management Member</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products" >
                                    <i className="material-icons">fastfood</i>
                                    <p>Management Food</p>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/menuListPage" >
                                    <i className="material-icons">content_paste</i>
                                    <p>Management Menu</p>
                                </Link>
                            </li>
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/viewInformationStore">
                                    <i className="material-icons">store</i>
                                    <p>Management Store</p>
                                </Link>
                            </li> 
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/orderListPage">
                                    <i className="material-icons">assignment</i>
                                    <p>Management Order</p>
                                </Link>
                            </li> 
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/cancelOrderPage">
                                    <i className="material-icons">remove_shopping_cart</i>
                                    <p>Management Order Cancel</p>
                                </Link>
                            </li> 
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/categoriesListPage">
                                    <i className="material-icons">list_alt</i>
                                    <p>Management Categories</p>
                                </Link>
                            </li> 
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/transactionListPage">
                                    <i className="material-icons">attach_money</i>
                                    <p>Management Transaction</p>
                                </Link>
                            </li> 
                            <li className="nav-item active">
                                <Link className="nav-link" to="/viewFeedback">
                                    <i className="material-icons">feedback</i>
                                    <p>View Feedback</p>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}
export default MenuList;