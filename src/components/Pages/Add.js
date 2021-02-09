import React, { Component } from 'react'
import Header from '../Header/Header'

export default class add extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <form className="form p-5 col-md-6">
                        <div className="form-group">
                            <h1>Create event</h1>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Please Enter Title" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Please Enter Highlight" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="date" placeholder="Pick Date" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="time" placeholder="Pick Time" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="time" placeholder="Please Enter Description" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="file" name="files" accept=".jpg,.jpeg,.png" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
