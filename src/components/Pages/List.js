import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default class List extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Event List</h1>
                <Footer/>
            </div>
        )
    }
}
