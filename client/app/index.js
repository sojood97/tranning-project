import React from 'react';
import { render } from 'react-dom';
import {Signup} from "./components/pages/signup";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';

import HelloWorld from './components/HelloWorld/HelloWorld';

import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Signup}/>
       /* <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>

        */
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));


