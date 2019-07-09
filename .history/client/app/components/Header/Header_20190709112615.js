import React, { Component } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faSearch,
    faPlus,
    faInfoCircle,
    faBell
} from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            flag: false,
            showMenu: false,
            showMember: false,
            showMenu1: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
    }

    showMenu(event) {
        
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    showMenu1(event) {
        
        this.setState({ showMenu1: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        this.setState({ showMenu: false });
        
    }

    closeMenu1(event) {
        this.setState({ showMenu1: false });
        
    }

    render() {
        return (
            <header className="board_header">
                <NavLink to="/home" className="board_icon">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to="/home" className="board_icon">
                    <FontAwesomeIcon icon={faTrello} /> Boards
                </NavLink>
                <NavLink to="/home" className="board_icon">
                    <input type="text" className="search_input" />
                    <FontAwesomeIcon icon={faSearch} />
                </NavLink>
                <span className="trello_text_span">
                    <NavLink to="/home" className="trello_link_span">
                        <FontAwesomeIcon icon={faTrello} />
                        Trello
                    </NavLink>
                </span>
                <div className="board_header_right">
                    <span
                        className="board_icon"
                        onClick={() => this.showMenu1()}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span className="board_icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </span>
                    <span className="board_icon">
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                    <span
                        className="member_circle"
                        onClick={() => this.showMenu()}
                    >
                        SA
                    </span>
                </div>
                <div>
                    {this.state.showMenu ? (
                        <div className="position-card">
                            <div
                                className="menu_actions"
                                ref={element => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className="title_menu">
                                    <span>
                                        Sojood alsayyed (sojoodalsayyed)
                                    </span>
                                    <span
                                        className="close_list_action"
                                        onClick={e => {
                                            this.closeMenu(e);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            size="1x"
                                        />
                                    </span>
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
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Cards
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Setting
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
                                                    Help
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Shortcuts
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Change language..
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
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div>
                    {this.state.showMenu1 ? (
                        <div className="position-card2">
                            <div
                                className="menu_actions"
                                ref={element => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className="title_menu">
                                    <span>Create</span>
                                    <span
                                        //to="/home"
                                        className="close_list_action"
                                        onClick={e => {
                                            this.closeMenu1(e);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            size="1x"
                                        />
                                    </span>
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
                                                    Create Board ...
                                                    <p>
                                                        A Board is made up of
                                                        cards orderd on lists.
                                                        use it to manage
                                                        projects,or organize
                                                        anything.
                                                    </p>
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Create Team...
                                                    <p>
                                                        {" "}
                                                        A Team is a groupe of
                                                        boards and people. use
                                                        it to organize your
                                                        company ,side hustel
                                                        ,family ,or friends
                                                    </p>
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Create Bussiness Team...
                                                    <p>
                                                        With Bussiness Class
                                                        your team has more
                                                        security, administartive
                                                        controls ,and unlimited
                                                        Power-Ups.
                                                    </p>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </header>
        );
    }
}

export default Header;
