import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../app/pages/Login/Login';
import Reset_Password from '../app/pages/Login/reset_password/Reset_Password';

import './styles/styles.scss';

render((
    <BrowserRouter>
        {/* <Switch>
            <PublicRoute restricted={false} component={Login} path="/" exact />
            <PublicRoute restricted={false} component={Reset_Password} path="/reset_password" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
       </Switch>*/}
        <div>
            <Route path={"/login"} component={Login} />
            <Route path={"/reset_password"} component={Reset_Password} />
        </div>
    </BrowserRouter>
), document.getElementById('app'));
