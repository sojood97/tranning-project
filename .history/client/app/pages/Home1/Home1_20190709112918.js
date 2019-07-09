import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/body";
import Homecomponent from "../../components/Homecomponent/Homecomponent";
import "../Home1/Home1.scss";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="style-page1">
                    <Body />
                    <Homecomponent />
                </div>
            </div>
        );
    }
}
