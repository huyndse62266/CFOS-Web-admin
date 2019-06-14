import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteMap } from '../../utils/constants';
import { ROLES } from '../../utils/constants/constants';

class MenuList extends Component {
  isActive = route => {
    return route === this.props.location.pathname;
  };
  getMenu = role => {
    return [
      {
        name: 'View Static',
        iconName: 'dashboard',
        isShow:
          role === ROLES.STORE_MANAGER || role === ROLES.FOOD_COURT_MANAGER,
        route: RouteMap.ROUTE_DASHBOARD
      },
      {
        name: 'Management Staff',
        iconName: 'person',
        isShow: role === ROLES.FOOD_COURT_MANAGER,
        route: RouteMap.ROUTE_STAFF
      },
      {
        name: 'Management Member',
        iconName: 'how_to_reg',
        isShow: role === ROLES.CASHIER,
        route: RouteMap.ROUTE_MEMBER
      },
      {
        name: 'Management Food',
        iconName: 'fastfood',
        isShow: role === ROLES.STORE_MANAGER,
        route: RouteMap.ROUTE_PRODUCTS
      },
      {
        name: 'Manage Foodcourt Manager',
        iconName: 'person',
        isShow: role === ROLES.SYSTEM_ADMIN,
        route: RouteMap.ROUTE_CREATE_FOODCOURT
      },
      {
        name: 'Manage FoodCourt',
        iconName: 'store',
        isShow: role === ROLES.SYSTEM_ADMIN,
        route: RouteMap.ROUTE_MANAGE_FOODCOURT
      },
      {
        name: 'Management Store',
        iconName: 'store_mall_directory',
        isShow: role === ROLES.FOOD_COURT_MANAGER,
        route: RouteMap.ROUTE_STORE_INFOMATION
      },
      {
        name: 'Management Category',
        iconName: 'store_mall_directory',
        isShow: role === ROLES.STORE_MANAGER,
        route: RouteMap.ROUTE_MANAGE_CATEGORY_STORE
      },
      {
        name: 'Management Order',
        iconName: 'assignment',
        isShow: role !== ROLES.SYSTEM_ADMIN,
        route: RouteMap.ROUTE_ORDER
      },
      // {
      //   name: 'Management Order Cancel',
      //   iconName: 'remove_shopping_cart',
      //   route: RouteMap.ROUTE_CANCEL_ORDER
      // },
      {
        name: 'Management Categories',
        iconName: 'list_alt',
        isShow: role === ROLES.FOOD_COURT_MANAGER,
        route: RouteMap.ROUTE_CATEGORIES
      },
      {
        name: 'Management Transaction',
        iconName: 'attach_money',
        isShow: role === ROLES.CASHIER,
        route: RouteMap.ROUTE_TRANSACTION
      },
      {
        name: 'View Feedback',
        iconName: 'feedback',
        isShow: role === ROLES.STORE_MANAGER,
        route: RouteMap.ROUTE_FEEDBACK
      }
    ];
  };

  render() {
    const { role } = this.props;
    console.log('abc:', role);
    const menu = this.getMenu(role);
    return (
      <div>
        <div
          className="sidebar"
          data-color="purple"
          data-background-color="white"
          data-image="../assets/img/sidebar-1.jpg"
        >
          <div className="logo">
            <Link to={RouteMap.ROUTE_DASHBOARD}>
              <div className="simple-text logo-normal">CFOS</div>
            </Link>
          </div>
          <div className="sidebar-wrapper">
            <ul className="nav">
              {menu.map((el, index) => {
                if (el.isShow)
                  return (
                    <li
                      key={index}
                      className={`nav-item ${this.isActive(el.route) &&
                        'active'}`}
                    >
                      <Link className="nav-link" to={el.route}>
                        <i className="material-icons">{el.iconName}</i>
                        <p>{el.name}</p>
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    state => ({
      role: state.system.role
    }),
    {
      // action
    }
  )(MenuList)
);
