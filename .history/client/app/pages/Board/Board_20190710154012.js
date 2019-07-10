import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "y";

import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Header from "../../components/Header/Header";
import "../Board/Board.scss";

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            flag: false,
            showMenu: false,
            showMember: false
        };
        this.showMenu = this.showMenu.bind(this);
    }

    showMember(event) {
        event.preventDefault();
        this.setState({ showMember: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        this.setState({ showMenu: false, showMember: false }, () => {
            document.removeEventListener("click", this.closeMenu);
        });
    }

    addAnotherCard(e) {
        e.preventDefault();
        this.setState({ flag: true });
    }

    render() {
        return (
            <div className="board_container">
                <Header />
                <div className="board_body">
                    <div className="board_body_header">
                        <input type="text" className="change_name" />
                        <NavLink className="star_icon" to="/home">
                            <FontAwesomeIcon icon={faStar} size="1x" />
                        </NavLink>
                        <div className="vertical_line_div" />
                        <span
                            className="member_circle"
                            onClick={e => {
                                this.showMember(e);
                            }}
                        >
                            FS
                        </span>
                        {this.state.showMember ? (
                            <div
                                className="menu_member"
                                ref={element => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className="title_menu">
                                    <span className="member_circle">FS</span>
                                    <div className="name_info">
                                        <h3>Futna Shoqo</h3>
                                        <p>@futnashoqo</p>
                                        <p>Edit profile info</p>
                                    </div>
                                    <NavLink
                                        to=""
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
                                <div>
                                    <div className="actions_div">
                                        <ul className="ull">
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Move All Cards In This
                                                    List...
                                                </NavLink>
                                            </li>
                                            <li className="lii">
                                                <NavLink
                                                    to=""
                                                    className="choice_itself"
                                                >
                                                    Archive All Cards In This
                                                    List...
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <NavLink to="/home" className="board_icon">
                            Invite
                        </NavLink>
                        <div className="board_header_right">
                            <NavLink to="/home" className="board_show_menu">
                                <span className="board_points">... </span>
                                <span className="board_show_menu_text">
                                    Show Menu
                                </span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="board_lists">
                        <div className="list_wrap">
                            <div className="list_itself">
                                <div className="list_title_action">
                                    {}
                                    <textarea
                                        value="Thing To Do"
                                        className="list_title"
                                    />
                                    <div className="list_actions">
                                        <NavLink
                                            to="/"
                                            className="points_link"
                                            onClick={e => {
                                                this.showMenu(e);
                                            }}
                                        >
                                            ...
                                        </NavLink>

                                        {this.state.showMenu ? (
                                            <div
                                                className="menu_actions"
                                                ref={element => {
                                                    this.dropdownMenu = element;
                                                }}
                                            >
                                                <div className="title_menu">
                                                    <span>List Action</span>
                                                    <NavLink
                                                        to=""
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
                                </div>
                                <div className="list_cards">
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        call friend
                                    </NavLink>
                                    {this.state.flag ? (
                                        <NavLink
                                            to="/"
                                            className="list_card_itself"
                                        >
                                            ccc
                                        </NavLink>
                                    ) : null}
                                </div>
                                <NavLink
                                    to=""
                                    className="add_another_card"
                                    onClick={e => {
                                        this.addAnotherCard(e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} size="1x" />{" "}
                                    Add another card
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/home" className="add_another_list">
                            <FontAwesomeIcon icon={faPlus} size="1x" /> Add
                            another list
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
