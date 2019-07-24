import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup } from "../app/pages/signup/signup.js";
import Login from "./pages/Login/Login";
import Reset_Password from "./pages/Login/reset_password/Reset_Password";
import Home from "./pages/Home/Home";
import App from "./App";
import Board from "./pages/Board/Board";
import Boards1 from "./pages/Boards1/Boards1";
import Home1 from "./pages/Home1/Home1";
render(
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/reset_password"} component={Reset_Password} />
                <Route path={"/home"} component={Home} />
                <Route path={"/signup"} component={Signup} />
                <Route path={"/board"} component={Board} />
                <Route path={"/boards1"} component={Boards1} />
                <Route path={"/home1"} component={Home1} />
            </Switch>
        </div>
    </BrowserRouter>,

    document.getElementById("app")
);
