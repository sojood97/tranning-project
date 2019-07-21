import React, { Component } from "react";
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
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
            showMenu1: false,
            showMenu2: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);
    }

    showMenu(event) {
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    showMenu1(event) {
        this.setState({ showMenu1: true }, () => {
            document.addEventListener("click", this.closeMenu1);
        });
    }
    showMenu2(event) {
        this.setState({ showMenu2: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }
    closeMenu(event) {
        this.setState({ showMenu: false });
    }

    closeMenu1(event) {
        this.setState({ showMenu1: false });
    }
    closeMenu2(event) {
        this.setState({ showMenu2: false });
    }

    render() {
        return (
            <div className="header_position">
            <header className="board_header">
                <NavLink to="/home" className="board_icon">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <span className="board_icon" onClick={() => this.showMenu2()}>
                    <FontAwesomeIcon icon={faTrello} /> Boards
                </span>
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
                <div>
                    {this.state.showMenu2 ? (
                        <div className="card_board_loaction">
                            <div
                                className="menu_actions_board"
                                ref={element => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div>
                                    <span> </span>
                                    <span
                                        className="close_list_action"
                                        onClick={e => {
                                            this.closeMenu2(e);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            size="1x"
                                        />
                                    </span>
                                </div>

                                <div>
                                    <div className="actions_div">
                                        <form className="nammess_form">
                                            <input
                                                className="text_names_box"
                                                type="text"
                                                placeholder="Find boards by name"
                                            />
                                        </form>
                                        <div className="actions_div">
                                            <ul className="ull">
                                                <li
                                                    className="lii"
                                                    className="color_nav1"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                        size="1x"
                                                    />
                                                    STARRED BOARDS
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        size="1x"
                                                        className="plus_position"
                                                    />
                                                </li>
                                                <li
                                                    className="lii"
                                                    className="color_nav2"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrello}
                                                        size="1x"
                                                    />
                                                    RECENT BOARDS
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        size="1x"
                                                        className="plus_position1"
                                                    />
                                                </li>
                                                <li
                                                    className="lii"
                                                    className="color_nav3"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrello}
                                                        size="1x"
                                                    />
                                                    PERSONAL BOARDS
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        size="1x"
                                                        className="plus_position2"
                                                    />
                                                </li>
                                                <li className="lii">
                                                    <NavLink
                                                        to=""
                                                        className="choice_itself"
                                                    >
                                                        <NavLink
                                                            className="color_nav"
                                                            to="/home"
                                                        >
                                                            Create new board
                                                        </NavLink>
                                                    </NavLink>
                                                </li>
                                                <li className="lii">
                                                    <NavLink
                                                        to=""
                                                        className="choice_itself"
                                                    >
                                                        <NavLink
                                                            className="color_nav"
                                                            to="/home"
                                                        >
                                                            Always keep this
                                                            menu open
                                                        </NavLink>
                                                    </NavLink>
                                                </li>
                                                <li className="lii">
                                                    <NavLink
                                                        to=""
                                                        className="choice_itself"
                                                    >
                                                        <NavLink
                                                            className="color_nav"
                                                            to="/home"
                                                        >
                                                            See closed boards
                                                        </NavLink>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr className="_hr" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </header>
            </div>
        );
    }
}

export default Header;
