import React from "react";
import { NavLink } from "react-router-dom";

import "../../components/Resentllysearch/resentlly.scss";

import person from "../../assets/images/person.jpg";
import Recently from "../../assets/images/Recently.png";
export const Resentlly = () => (
    <div className="all">
        <div className="resentlly-all">
            <img src={Recently} className="image-recentlly" />
            <label className="view">Recently Viewed</label>
            <NavLink to="/Board">
                <ul className="board-test1">
                    <board className="test1">test</board>
                </ul>
            </NavLink>
        </div>
        <div className="two-board">
            <div className="person">
                <img src={person} className="image-person" />

                <label className="view">Personal Boards</label>

                <ul className="board-test1">
                    <board className="test1">test</board>
                </ul>
            </div>
            <div className="create-new ">
                <label className="view1">Personal Boards</label>
                <ul className="board-test2">
                    <board className="board-test2">
                        <label className="create1">create new board</label>
                    </board>
                </ul>
            </div>
        </div>
    </div>
);

export default Resentlly;
