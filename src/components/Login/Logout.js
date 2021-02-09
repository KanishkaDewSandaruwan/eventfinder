import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect:false
        }

        if(sessionStorage.getItem("email")){
            sessionStorage.clear();
        };
    }
    render() {
        if(sessionStorage.getItem("email")){
            return (<Redirect to={'/home'} />);
        }else{
            return (<Redirect to={'/login'} />);
        }
    }
}
