import React from 'react'
import { BrowserRouter as Switch, Route, BrowserRouter} from "react-router-dom"

import List from './components/Pages/List'
import About from './components/Pages/About'
import Contact from './components/Pages/ContactUs'
import Home from './components/Home/Home'
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Add from "./components/Pages/Add";

const routers = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path='/add' component={Add} />
            <Route exact path='/list' component={List} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/home' component={Home} />
        </Switch>
    </BrowserRouter>
);
export default routers