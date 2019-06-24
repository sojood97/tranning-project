import React from 'react';
import { render } from 'react-dom';
import {Signup} from '../app/pages/signup/signup.js';
import {
  BrowserRouter ,
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'





import './styles/styles.scss';

render((
  

  
 // <Router>
    <BrowserRouter>
      <div>
        <Route  path={"/signup"} component={Signup}/>
        
        </div>
      </BrowserRouter>
  //</Router>
 
), document.getElementById('app'));


