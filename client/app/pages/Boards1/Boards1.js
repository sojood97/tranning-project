import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/body";
import Resentllysearch from "../../components/Resentllysearch/resentlly";
import "../Boards1/Boards1.scss";
export default class Boards1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="compnent">
                    <Body />
                    <Resentllysearch />
                </div>
            </div>
        );
    }
}
