import React from 'react'
import { BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom"
import Login from "./components/Login/Login";


const routers = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
);
export default routers