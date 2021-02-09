import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import SlideShow from '../Body/Slideshow'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default class Home extends Component {

    render() {
        if (sessionStorage.getItem("email")) {
            return (<Redirect to={'/home'} />);
        }else{
            return (<Redirect to={'/login'} />);
        }
        return (
            <div>
                <Header/>
                <SlideShow/>
                <h1>Home</h1>
                <Footer/>
            </div>
        )
    }
}
