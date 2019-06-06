import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="main-panel">
              
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">                     
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">notifications</i>
                                        <span className="notification">5</span>
                                        <p className="d-lg-none d-md-block">
                                            Some Actions
                                            </p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        );
    }
}

export default Header;