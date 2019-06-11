import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Layout } from 'antd';
import * as routes from '../../utils/constants/route';
import ProfileModal from '../Modal/ProfileModal/ProfileModal';
import ChangePasswordModal from '../Modal/ChangePassword/ChangePasswordModal';
import './Header.scss';

class Header extends Component {

  handleClick = item => {
    console.log('test', item.key);
    window.location.href = '#' + item.key;
  }

  render() {
    const menu = (
    <Menu onClick={this.handleClick}>
      <Menu.Item key={routes.ROUTE_PROFILE}>Profile</Menu.Item>
      <Menu.Item key={routes.ROUTE_CHANGE_PASSWORD}>Change Password</Menu.Item>
      <Menu.Item key={routes.ROUTE_LOGOUT}>Logout</Menu.Item>
    </Menu>
  );
    return (
      <Layout.Header className="header-container">
        <Dropdown overlay={menu}>
          <Icon type="user" className="user-icon" />
        </Dropdown>
      </Layout.Header>
    );
  }
}

export default Header;
