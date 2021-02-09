import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
    state = {
        selectedFile: null,
        fullname: '',
        address: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        repassword: '',
        redirect: false,
        result: '',
        logemail: '',
        logpassword: ''
    }


    constructor(props) {
        super(props);

        this.fileUpload = this.fileUpload.bind(this);
    }

    fileSelect = event => {
        this.setState({ selectedFile: event.target.files[0] })
        console.log(event.target.files[0])
    }

    fileUpload = () => {


        if (this.state.fullname.trim() === "") {
            alert("Please Enter Your Name");
        } else if (this.state.address.trim() === "") {
            alert("Please Enter Your Address");
        } else if (this.state.phone.trim() === "") {
            alert("Please Enter Your Address");
        } else if (this.state.gender.trim() === "") {
            alert("Please Select Your Gender");
        } else if (this.state.email.trim() === "") {
            alert("Please Enter Your Email Address");
        } else if (this.state.password.trim() === "") {
            alert("Please Enter Password");
        } else if (this.state.repassword.trim() === "") {
            alert("Please Re Enter Your Password to Confirm ");
        } else if (this.state.password === this.state.repassword) {
            var emailPattern = new RegExp(/([\da-zA-Z0-9._!])@([\da-zA-Z]).([A-Za-z])/);
            if (emailPattern.test(this.state.email)) {

                var phonePattern = new RegExp(/^([0]([789])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/);
                if (phonePattern.test(this.state.phone)) {

                    const fd = new FormData();
                    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
                    fd.append('fullname', this.state.fullname);
                    fd.append('address', this.state.address);
                    fd.append('phone', this.state.phone);
                    fd.append('gender', this.state.gender);
                    fd.append('email', this.state.email);
                    fd.append('password', this.state.password);

                    axios.post('http://localhost/eventshare/register.php', fd
                    ).then((res) => {
                        if (res.data === 'Success') {
                            alert("Registration Success");
                            window.location.reload(true);
                        } else {
                            alert("Registration Fail");
                        }
                    }
                    );

                } else {
                    alert("Please enter Valid Phone Number");
                }
            } else {
                alert("Please enter Valid Email");
            }
        } else {
            alert("Password is Not Match");

        }

    }
    loggin = (e) => {

        if (this.state.logemail.trim() === "") {
            alert("Please Enter Email Address to Login");
        } else if (this.state.logpassword.trim() === "") {
            alert("Please Enter Password to Login");
        } else {
            const log = new FormData();
            log.append('logemail', this.state.logemail)
            log.append('logpassword', this.state.logpassword)

            axios.post('http://localhost/eventshare/login.php', log)
                .then((result) => {
                    console.log(result.data);
                    if (result.data) {
                        sessionStorage.setItem('email', result.data);
                        this.setState({redirect:true});
                    } else {
                        console.log("no");
                        alert("Email or Password is Wrong");
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        if (sessionStorage.getItem("email")) {
            return (<Redirect to={'/home'} />);
        }else if(this.state.redirect){
            return (<Redirect to={'/home'} />);
        }
        return (
            <div id="login" className="row p-5">
                <div className="col-md-6">
                    <form className="form col-md-8">
                        <div className="row">
                            <h1 id="headText" className="text-center font-weight-bold">Event Share Login</h1>
                        </div>
                        <p>Login to Continue</p>
                        <div className="form-group mt-4">
                            <input type="text" onChange={e => this.setState({ logemail: e.target.value })} required value={this.setState.logemail} className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={e => this.setState({ logpassword: e.target.value })} required value={this.setState.logpassword} className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="button" onClick={this.loggin} className="btn btn-lg w-100 btn-danger" value="Login" />
                        </div>
                    </form>
                </div>
                <div className="col-md-6 border-left border-danger">
                    <form className="form col-md-10" method="POST">
                        <div className="row">
                            <h1 id="headText" className="text-center font-weight-bold">Event Share Registration</h1>
                        </div>
                        <p>Register befoure to Login</p>
                        <div className="form-group mt-4">
                            <input type="text" name="fullname" onChange={e => this.setState({ fullname: e.target.value })} required value={this.state.fullname} className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="text" name="address" onChange={e => this.setState({ address: e.target.value })} required value={this.state.address} className="form-control" placeholder="Address" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="text" name="phone" onChange={e => this.setState({ phone: e.target.value })} required value={this.state.phone} maxLength="10" className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="form-group mt-4">
                            <div className="row">
                                <label className="text">Gender</label>
                            </div>
                            <input className="mr-1" onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender} type="radio" value="Male" name="gender" /> Male
                            <input className="mr-1 ml-2" onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender} type="radio" value="Female" name="gender" /> Female
                            <input className="mr-1 ml-2" onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender} type="radio" value="Other" name="gender" /> Other
                        </div>
                        <div className="form-group mt-4">
                            <input type="file" onChange={this.fileSelect} accept=".jpg,.jpeg,.png" />
                        </div>
                        <div className="form-group mt-4">
                            <input type="text" onChange={e => this.setState({ email: e.target.value })} required value={this.state.email} name="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={e => this.setState({ password: e.target.value })} required value={this.state.password} className="form-control" name="pass" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={e => this.setState({ repassword: e.target.value })} required value={this.state.repassword} className="form-control" name="rpass" placeholder="Re-Password" />
                        </div>
                        <div className="form-group">
                            <input type="button" onClick={this.fileUpload} className="btn btn-lg w-100 btn-danger" value="Register & Continue" />
                        </div>
                    </form>
                </div>
                <div className="row border-top border-dark p-2" id="footer">
                    <p className="align-text-bottom">EventShare © Copyrights {this.getYear()}. All rights reserved</p>
                    <p className="align-text-bottom">Designed By : Kanishka Dew Sandaruwan</p>
                </div>
            </div>
        )
    }
}
