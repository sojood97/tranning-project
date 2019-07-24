import React, { Component } from "react";
import { Header } from "../../components/Header/Header";
import { Body } from "../../components/Body/body";
import Resentllysearch from "../../components/Resentllysearch/resentlly";
import "../Home/Home.scss";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="style-page">
                    <Body />
                    <Resentllysearch />
                </div>
            </div>
        );
    }
}
