import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import MenuList from './../../components/Menu/MenuList';
import Direct from './../../routes/directURL';
import Header from './../../components/Header/Header';
export default class Dashboard extends Component {
    render() {
        return (
            // Start sidebar
            <Router>
                <div className="wrapper">
                    <Header/>
                    <MenuList/>
                    <div>
                        <Direct />
                    </div>
                </div>
            </Router>
            //   End slidebar
        )
    }
}
