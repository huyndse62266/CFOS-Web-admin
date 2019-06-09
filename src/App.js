import React from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/LoginPage/LoginForm';
import DirectURL from './routes/directURL';
import Header from './components/Header/Header';
import MenuList from './components/Menu/MenuList';
import Footer from './components/Footer/Footer';

function App(props) { 
  console.log(props.location.pathname)
  const isLogin = props.location.pathname === '/login';
  return (
    
        <div className="wrapper">
        {!isLogin && <Header />}
        {!isLogin && <MenuList />}
          <div>
            <DirectURL />
          </div>
          {!isLogin && <Footer />}
        </div>

  );
}
export default withRouter(App);
