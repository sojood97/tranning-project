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
        /*
        this.state = {
            showmenue: false,
            color: ""
        };
        */
       this.state = {
        cards: [],
        flag: false,
        showMenu: false,
        showMember: false
    };
    this.showMenu = this.showMenu.bind(this);
    }
    showMember(event) {
        //event.preventDefault();
        this.setState({ showMember: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    showMenu(event) {
        //event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        // if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false, showMember: false }, () => {
            document.removeEventListener("click", this.closeMenu);
        });
        //}
    }

   /* showmenue() {
        console.log("inside function");
        this.setState({ showmenue: true });
    }
*/
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
                                    onClick={() => this.showMenu ()}
                                >
                                    create a team
                                </label>


                            </span>
                        </div>
                    </div>
                    <div>
                    {this.state.showMenu ? (
                                            <div
                                                className="menu_actions"
                                                
                                            >
                                                <div className="title_menu">
                                                    <span>List Action</span>
                                                    <NavLink
                                                        to="/Board"
                                                        className="close_list_action"
                                                        onClick={e => {
                                                            this.closeMenu(e);
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faTimes}
                                                            size="1x"
                                                        />
                                                    </NavLink>
                                                </div>
                                                <hr className="_hr" />
                                                <div>
                                                    <div className="actions_div">
                                                        <ul className="ull">
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Add card...
                                                                </NavLink>
                                                            </li>
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Copy List...
                                                                </NavLink>
                                                            </li>
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Move List...
                                                                </NavLink>
                                                            </li>
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Watch
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                        <hr className="_hr" />
                                                        <ul className="ull">
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Sort By...
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                        <hr className="_hr" />
                                                        <ul className="ull">
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Move All
                                                                    Cards In
                                                                    This List...
                                                                </NavLink>
                                                            </li>
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Archive All
                                                                    Cards In
                                                                    This List...
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                        <hr className="_hr" />
                                                        <ul className="ull">
                                                            <li className="lii">
                                                                <NavLink
                                                                    to=""
                                                                    className="choice_itself"
                                                                >
                                                                    Archive This
                                                                    List
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Body;