import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.scss';
import Header from './components/Header/Header';
import MenuList from './components/Menu/MenuList';
import Footer from './components/Footer/Footer';
import { isDiff } from './utils/helpers/helpers';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return isDiff(nextProps.location !== this.props.location);
  }
  render() {
    const { location } = this.props;
    const isLogin = location.pathname === '/login';
    return (
      <div className="wrapper">
        {!isLogin && <Header />}
        {!isLogin && <MenuList />}
        <div>
          <Routes />
        </div>
        {!isLogin && <Footer />}
      </div>
    );
  }
}

export default withRouter(App);
