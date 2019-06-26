import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Reset_Password from './pages/Login/reset_password/Reset_Password';
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import Signup from './pages/signup/signup';
import App from './App';

render((
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/reset_password"} component={Reset_Password} />
                <Route path={"/home"} component={Home} />
                <Route path={"/about"} component={About} />
                <Route  path={"/signup"} component={Signup}/>
            </Switch>
        </div>
    </BrowserRouter>

), document.getElementById('app'));


