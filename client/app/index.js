import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Reset_Password from './pages/Login/reset_password/Reset_Password';
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import App from './App';
=======
import {Signup} from '../app/pages/signup/signup.js';
import {
  BrowserRouter ,
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'




>>>>>>> SignupLogin

import './styles/styles.scss';

render((
<<<<<<< HEAD
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/reset_password"} component={Reset_Password} />
                <Route path={"/home"} component={Home} />
                <Route path={"/about"} component={About} />
            </Switch>
        </div>
    </BrowserRouter>
=======
  

  
 // <Router>
    <BrowserRouter>
      <div>
        <Route  path={"/signup"} component={Signup}/>
        
        </div>
      </BrowserRouter>
  //</Router>
 
>>>>>>> SignupLogin
), document.getElementById('app'));


