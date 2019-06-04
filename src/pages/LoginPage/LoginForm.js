import React, { Component } from "react";
import logo from '../images/mgm-grand-restaurants-food-court-architecture-exterior-01.jpg';
export default class LoginForm extends Component {
  render() {
    return (
        <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" >
                        <img src={logo} className="login-logo" width={"100%"} height={"100%"}/>
                   </div>   
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                          Login
                        </a>              
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
