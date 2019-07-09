import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Signup } from "../app/pages/signup/signup.js";

import Login from "./pages/Login/Login";
import Reset_Password from "./pages/Login/reset_password/Reset_Password";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About";
import App from "./App";
import Board from "./pages/Board/Board";
import Boards1 from "./pages/Boards1/Boards1";
import Home1 from "./pages/Home1/Home1";
import Resentllysearch from "./components/Resentllysearch/resentlly";
render(
    <BrowserRouter>
        <div>
            <App />
            <Switch>
                <Route path={"/login"} component={Login} />
                <Route path={"/reset_password"} component={Reset_Password} />
                <Route path={"/home"} component={Home} />
                <Route path={"/about"} component={About} />
                <Route path={"/signup"} component={Signup} />
                <Route path={"/Board"} component={Board}/>
                <Route path={"/Boards1"} component={Boards1}/>
                <Route path={"/Home1"} component={Home1} />
                <Route path={"/home"} component={r}
            </Switch>
        </div>
    </BrowserRouter>,

    document.getElementById("app")
);
