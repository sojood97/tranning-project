import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <NavLink to="/borad">About</NavLink>
            </div>
        );
    }
}
