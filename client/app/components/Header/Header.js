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
import { Redirect } from "react-router-dom";
export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            flag: false,
            showMenu: false,
            showMember: false,
            showMenu1: false,
            showMenu2: false,
            logoutflag: false
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
    logout() {
        localStorage.clear();
        this.setState({ logoutflag: true });
    }

    render() {
        return (
            <header className="board_header">
                <NavLink to="/home" className="board_icon">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <button className="board_icon" onClick={() => this.showMenu2()}>
                    <FontAwesomeIcon icon={faTrello} /> Boards
                </button>
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

                {this.state.showMenu ? (
                   
                        <div
                            className="menu_actions2"
                            ref={element => {
                                this.dropdownMenu = element;
                            }}
                        >
                            <div className="title_menu">
                                <span>Sojood alsayyed (sojoodalsayyed)</span>
                                <span
                                    className="close_list_action"
                                    onClick={e => {
                                        this.closeMenu(e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTimes} size="1x" />
                                </span>
                            </div>
                            <hr className="_hr" />

                            <div className="actions_div">
                                <ul className="ull">
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Profile and visiblitiy
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Activity
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Cards
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >Setting
                                        </NavLink>
                                    </li>
                                </ul>
                                <hr className="_hr" />
                                <ul className="ull">
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Help
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Shortcuts
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself1"
                                        >
                                            Change language..
                                        </NavLink>
                                    </li>
                                </ul>
                                <hr className="_hr" />
                                <ul className="ull">
                                    <li className="lii">
                                        <NavLink
                                            to="/login"
                                            className="choice_itself1"
                                            onClick={() => this.logout()}
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                  
                ) : null}

                {this.state.showMenu1 ? (
                    
                        <div
                            className="menu_actions"
                            ref={element => {
                                this.dropdownMenu = element;
                            }}
                        >
                            <div className="title_menu">
                                <span>Create</span>
                                <span
                                    className="close_list_action"
                                    onClick={e => {
                                        this.closeMenu1(e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTimes} size="1x" />
                                </span>
                            </div>
                            <hr className="_hr" />

                            <div className="actions_div">
                                <ul className="ull">
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself2"
                                        >
                                            Create Board ...
                                            <p>
                                                A Board is made up of cards
                                                orderd on lists. use it to
                                                manage projects,or organize
                                                anything.
                                            </p>
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself2"
                                        >
                                            Create Team...
                                            <p>
                                                {" "}
                                                A Team is a groupe of boards and
                                                people. use it to organize your
                                                company ,side hustel ,family ,or
                                                friends
                                            </p>
                                        </NavLink>
                                    </li>
                                    <li className="lii">
                                        <NavLink
                                            to=""
                                            className="choice_itself2"
                                        >
                                            Create Bussiness Team...
                                            <p>
                                                With Bussiness Class your team
                                                has more security,
                                                administartive controls ,and
                                                unlimited Power-Ups.
                                            </p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   
                ) : null}

                {this.state.showMenu2 ? (
                    <div
                        className="menu_actions_board"
                        ref={element => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <span
                            className="close_list_action"
                            onClick={e => {
                                this.closeMenu2(e);
                            }}
                        >
                            <FontAwesomeIcon icon={faTimes} size="1x" />
                        </span>

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
                                    <li className="lii" className="color_nav1">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            size="1x" className="icon_star_position"
                                        />
                                        STARRED BOARDS
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            size="1x"
                                            className="plus_position"
                                        />
                                    </li>
                                    <li className="lii" className="color_nav2">
                                        <FontAwesomeIcon
                                            icon={faTrello}
                                            size="1x" className="icon_resent_position"
                                        />
                                        RECENT BOARDS
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            size="1x"
                                            className="plus_position1"
                                        />
                                    </li>
                                    <li className="lii" className="color_nav3">
                                        <FontAwesomeIcon
                                            icon={faTrello}
                                            size="1x" className="icon_personal_position"
                                        />
                                        PERSONAL BOARDS
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            size="1x"
                                            className="plus_position2"
                                        />
                                    </li>
                                    <li className="lii">
                                        
                                            <a
                                                className="color_nav"
                                                to="/home" className="choice_itself"
                                            >
                                                Create new board
                                            </a>
                                      
                                    </li>
                                    <li className="lii">
                                        
                                            <NavLink
                                                className="color_nav"
                                                to="/home" className="choice_itself"
                                            >
                                                Always keep this menu open
                                            </NavLink>
                                        
                                    </li>
                                    <li className="lii">
                                        
                                            <NavLink
                                                className="color_nav"
                                                to="/home" className="choice_itself"
                                            >
                                                See closed boards
                                            </NavLink>
                                       
                                    </li>
                                </ul>
                            </div>
                            <hr className="_hr" />
                        </div>
                    </div>
                ) : null}

                {this.state.logoutflag ? <Redirect to="/login" /> : null}
            </header>
        );
    }
}

export default Header;
