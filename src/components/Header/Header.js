import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import Logo from '../images/logo.png';
import './Header_style.css'

export default class Header extends Component {
    constructor(){
        super();

        this.state = { today: Date()}
    }

    render() {
        return (
            <div className="head">
               <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">
                            <a href="/home"><img src={Logo} width="180px" height="100px" alt="Event Share"/></a>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbars-rs-food">
                            <div className="col-md-4 col-lg-4">
                                <ul className="navbar-nav mt-5">
                                    <li className="nav-item"><a className="nav-link text-white" href="/home">Home</a></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-white" href="/list" id="dropdown-a" data-toggle="dropdown">Event List</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                            <a className="dropdown-item text-dark" href="user_logout.php">Logout</a>
                                            <a className="dropdown-item text-dark" href="myaccount.php">My Account</a>
                                            <a className="dropdown-item text-dark" href="vieworder.php">My Orders</a>
                                            <a className="dropdown-item text-dark" href="login/userlogin/login.php">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link text-white" href="/about">About</a></li>
                                    <li className="nav-item"><a className="nav-link text-white" href="/contact">Contact US</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 col-lg-5">
                                <p className="text-white">{this.state.today}</p>
                            </div>
                            <div className="col-md-2 ml-5 col-lg-2">
                                <ul className="navbar-nav mt-5">
                                    <li className="nav-item ml-5">
                                        <a className="nav-link text-white" title="Add Your Event"  href="/add" role="button">
                                        <FontAwesomeIcon style={{fontSize:30}} icon={faPlus} />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown ml-3">
                                        <a className="nav-link " href="/" title="My Account" id="dropdown-a" data-toggle="dropdown"><FontAwesomeIcon style={{fontSize:30,color: 'white'}} icon={faUser} /></a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                            <a className="dropdown-item text-dark" href="/logout">Logout</a>
                                            <a className="dropdown-item text-dark" href="myaccount.php">My Account</a>
                                            <a className="dropdown-item text-dark" href="vieworder.php">My Orders</a>
                                            <a className="dropdown-item text-dark" href="/login">Login</a>
                                        </div>
                                    </li>
                                    <li className="nav-item ml-3">
                                        <a className="nav-link text-white" title="Paticipations"  href="foodCart.php" role="button">
                                        <FontAwesomeIcon style={{fontSize:30}} icon={faCalendarAlt} />
                                            <span className="badge badge-danger badge-counter">5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
