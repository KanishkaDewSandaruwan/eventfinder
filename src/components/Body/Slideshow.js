import React, { Component } from 'react'

import Image01 from '../images/logo.png'

export default class Slideshow extends Component {
    render() {
        return (
            <div className="row">
                <div id="carouselExampleIndicators" className="col-md-12 carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" width="100%" height="300" src={Image01} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" width="100%" height="300" src={Image01} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" width="100%" height="300" src={Image01} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
        )
    }
}
