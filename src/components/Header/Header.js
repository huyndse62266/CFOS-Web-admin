import React, { Component } from 'react';
import ProfileModal from '../Modal/ProfileModal/ProfileModal';
import ChangePasswordModal from '../Modal/ChangePassword/ChangePasswordModal';
class Header extends Component {
  render() {
    return (
      <div className="main-panel">
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top  p-0">
          <div
            className="container-fluid"
            style={{ backgroundColor: '#343A40', color: 'white' }}
          >
            <div className="collapse navbar-collapse justify-content-end h-100">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="material-icons">notifications</i>
                    <span className="notification">5</span>
                    <p className="d-lg-none d-md-block">Some Actions</p>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    <a className="dropdown-item" href="#">
                      And another line of sample text here
                    </a>
                    <a className="dropdown-item" href="#">
                      And another line of sample text here
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    id="navbarDropdownProfile"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="material-icons">person</i>
                    <p className="d-lg-none d-md-block">Account</p>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#profileModal"
                    >
                      Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#changePasswordModal"
                    >
                      Change Password
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ProfileModal />
        <ChangePasswordModal />
      </div>
    );
  }
}

export default Header;
