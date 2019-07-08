import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Body/body.scss";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import {
    
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
    faHome,
    faSearch,
    faPlus,
    faInfoCircle,
    faBell
} from "@fortawesome/free-solid-svg-icons";
import Boards1 from "../../pages/Boards1/Boards1";
import Home1 from "../../pages/Home1/Home1";
import Board from "../../pages/Board/Board";

 export class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showmenue: false,
            color: ""
        };
    }

    showmenue() {
        console.log("inside function");
        this.setState({ showmenue: true });
    }

    remove() {
        console.log("inside function remove");
        this.setState({ showmenue: false });
    }

    render() {
        return (
            <div>
                <nav>
                    <div>
                        <ul className="body1">
                            <ul className="b">
                                <NavLink to="/Boards1" className="Boards">
                                    <FontAwesomeIcon
                                        icon={faTrello}
                                        className="icon1"
                                    />
                                    <label className="home" className="icon">
                                        Boards
                                    </label>
                                </NavLink>
                            </ul>
                            <ul />
                            <ul className="b">
                                <NavLink to="/Home1" className="Boards">
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        className="icon1"
                                    />
                                    <label className="home" className="icon">
                                        Home
                                    </label>
                                </NavLink>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <span className="teams">Teams</span>
                        <div>
                            <span className="create">
                                <FontAwesomeIcon icon={faPlus} />
                                <label
                                    className="create-label"
                                    onClick={() => this.showmenue()}
                                >
                                    create a team
                                </label>
                            </span>
                        </div>
                    </div>
                    <div>
                       
                    </div>
                </nav>
            </div>
        );
    }
}

export default Body;