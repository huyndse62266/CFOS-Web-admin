import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            // Start sidebar
            <div className="wrapper">
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
                    </a>
                    </div>
                    <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
                        <a className="nav-link" href="./dashboard.html">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./user.html">
                            <i className="material-icons">person</i>
                            <p>User Profile</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./tables.html">
                            <i className="material-icons">content_paste</i>
                            <p>Table List</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./typography.html">
                            <i className="material-icons">library_books</i>
                            <p>Typography</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./icons.html">
                            <i className="material-icons">bubble_chart</i>
                            <p>Icons</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./map.html">
                            <i className="material-icons">location_ons</i>
                            <p>Maps</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./notifications.html">
                            <i className="material-icons">notifications</i>
                            <p>Notifications</p>
                        </a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="./rtl.html">
                            <i className="material-icons">language</i>
                            <p>RTL Support</p>
                        </a>
                        </li>
                        <li className="nav-item active-pro ">
                            <a className="nav-link" href="./upgrade.html">
                                <i className="material-icons">unarchive</i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                        <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <a className="navbar-brand" href="#pablo">Dashboard</a>
                        </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
                <span className="navbar-toggler-icon icon-bar" />
            </button>
            <div className="collapse navbar-collapse justify-content-end">

                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#pablo">
            
                    <p className="d-lg-none d-md-block">
                        Stats
                    </p>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">notifications</i>
                    <span className="notification">5</span>
                    <p className="d-lg-none d-md-block">
                        Some Actions
                    </p>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Mike John responded to your email</a>
                    <a className="dropdown-item" href="#">You have 5 new tasks</a>
                    <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                    <a className="dropdown-item" href="#">Another Notification</a>
                    <a className="dropdown-item" href="#">Another One</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="material-icons">person</i>
                    <p className="d-lg-none d-md-block">
                        Account
                    </p>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Log out</a>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </nav>
                </div>
            </div>
        //   End slidebar
        )
    }
}
