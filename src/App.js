import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react'
import { Redirect, Router } from 'react-router-dom'
import MainRoute from './routers'
import LogRoute from './logRoute'
import Logo from './components/images/logo.png';

class App extends Component {
  constructor() {
    super();

    this.state = { redirect: false }
  }
  render() {
    const isLogged = sessionStorage.getItem("email");
    return (
      <div>
        {isLogged ? (
          <MainRoute />
        ) : (
            <div className="row p-5">
              <LogRoute />
              <div className="row">
                <h1 className="text-danger">Welcome! to Event Share</h1>
              </div>
              <div className="row mt-5">
                <div className="col-md-3">
                  <a href="login" className=" text-white btn btn-lg w-100 btn-danger">Go to Login</a>
                </div>
              </div>
              <img src={Logo} alt="Event Share" />
            </div>
          )
        }
      </div>
    )
  }
}

export default App