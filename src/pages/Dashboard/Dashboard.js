import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import MenuList from './../../components/Menu/MenuList';
import Direct from './../../routes/directURL';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer'
 class Dashboard extends Component {
    render() {
        console.log('aaa:', this.props.roles)
        return (
            <p> abc</p>
        )
    }
}
export default connect(
    state => ({
      roles: state.system.roles
    }),
    {
      //action
    }
  )(Dashboard);