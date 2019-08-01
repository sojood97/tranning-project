import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Header from "../../components/Header/Header";
import "../Board/Board.scss";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable, Draggable } from "react-beautiful-dnd";
export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            flag: false,
            showMenu: false,
            showMenu1: false,
            showMenu2: false,
            showMenu3: false,
            showMember: false,
            flag_card: false,
            flag1: false,
            flag_card1: false,
            flag2: false,
            flag_card2: false,
            flag3: false,
            flag_card3: false,
            list_flag: false,
            add_list: false,
            text: "",
            text1: "",
            text2: "",
            text3: "",
            list_name: "",
            text_list: "",
            count: 0,
            time: undefined
        };
        this.showMenu = this.showMenu.bind(this);
        this.showMenu1 = this.showMenu1.bind(this);
        this.showMenu2 = this.showMenu2.bind(this);
        this.showMenu3 = this.showMenu3.bind(this);
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

    showMenu1(event) {
        event.preventDefault();
        this.setState({ showMenu1: true }, () => {
            document.addEventListener("click", this.closeMenu1);
        });
    }

    showMenu2(event) {
        event.preventDefault();
        this.setState({ showMenu2: true }, () => {
            document.addEventListener("click", this.closeMenu2);
        });
    }
    showMenu3(event) {
        event.preventDefault();
        this.setState({ showMenu3: true }, () => {
            document.addEventListener("click", this.closeMenu3);
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

    closeMenu3(event) {
        this.setState({ showMember: false });
    }
    closeMenu4(event) {
        this.setState({ showMenu3: false });
    }

    addAnotherCard(e) {
        e.preventDefault();
        // this.setState({ flag: true });
        const count = this.state.count + 1;
        localStorage.setItem("count", count);
        this.setState({
            count: count,
            flag: true
        });
        console.log("count timestamp", count);
        var now = new Date();

        console.log(
            "date",
            now.getMonth() +
                1 +
                "/" +
                now.getDate() +
                "/" +
                now.getFullYear() +
                " " +
                now.getHours() +
                ":" +
                (now.getMinutes() < 10
                    ? "0" + now.getMinutes()
                    : now.getMinutes()) +
                ":" +
                (now.getSeconds() < 10
                    ? "0" + now.getSeconds()
                    : now.getSeconds())
        );

        console.log("timestamp", new Date(now).getTime() / 1000);
    }
    addNewCard() {
        this.setState({ flag: false, flag_card: true });
    }

    addAnotherCard1(e) {
        e.preventDefault();

        const count = this.state.count + 1;
        localStorage.setItem("count", count);
        this.setState({
            count: count,
            flag1: true
        });
        console.log("count timestamp", count);
        var now = new Date();

        console.log(
            "date",
            now.getMonth() +
                1 +
                "/" +
                now.getDate() +
                "/" +
                now.getFullYear() +
                " " +
                now.getHours() +
                ":" +
                (now.getMinutes() < 10
                    ? "0" + now.getMinutes()
                    : now.getMinutes()) +
                ":" +
                (now.getSeconds() < 10
                    ? "0" + now.getSeconds()
                    : now.getSeconds())
        );

        console.log("timestamp", new Date(now).getTime() / 1000);
    }
    addNewCard1() {
        this.setState({ flag1: false, flag_card1: true });
    }

    addAnotherCard2(e) {
        e.preventDefault();
        // this.setState({ flag2: true });
        const count = this.state.count + 1;
        localStorage.setItem("count", count);
        this.setState({
            count: count,
            flag2: true
        });
        console.log("count timestamp", count);
        var now = new Date();

        console.log(
            "date",
            now.getMonth() +
                1 +
                "/" +
                now.getDate() +
                "/" +
                now.getFullYear() +
                " " +
                now.getHours() +
                ":" +
                (now.getMinutes() < 10
                    ? "0" + now.getMinutes()
                    : now.getMinutes()) +
                ":" +
                (now.getSeconds() < 10
                    ? "0" + now.getSeconds()
                    : now.getSeconds())
        );

        console.log("timestamp", new Date(now).getTime() / 1000);
    }
    addNewCard2() {
        this.setState({ flag2: false, flag_card2: true });
    }
    addAnotherCard3(e) {
        e.preventDefault();
        this.setState({ flag3: true });
    }
    addNewCard3() {
        this.setState({ flag3: false, flag_card3: true });
    }
    closeCard() {
        this.setState({ flag: false });
    }
    closeCard1() {
        this.setState({ flag1: false });
    }
    closeCard2() {
        this.setState({ flag2: false });
    }
    closeCard3() {
        this.setState({ flag3: false });
    }
    addNewList() {
        this.setState({ list_flag: true });
    }
    closelist() {
        this.setState({ list_flag: false });
    }
    addNewlist1() {
        this.setState({ list_flag: false, add_list: true });
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
                            SA
                        </span>
                        {this.state.showMember ? (
                            <div className="card-position">
                                <div
                                    className="menu_member"
                                    ref={element => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                    <div className="title_menu">
                                        <span className="member_circle">
                                            SA
                                        </span>
                                        <div className="name_info">
                                            <h3>Sojood alsayyed</h3>
                                            <p>@sojoodalsayyed</p>
                                            <p>Edit profile info</p>
                                        </div>
                                        <span
                                            className="close_list_action"
                                            onClick={e => {
                                                this.closeMenu3(e);
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
                                                        Archive All Cards In
                                                        This List...
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
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
                                    <input
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
                                        find a hotel
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        Book flights
                                        <div>
                                            <p>0/1</p>
                                        </div>
                                    </NavLink>
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        call friend
                                    </NavLink>
                                    {this.state.flag ? (
                                        <span>
                                            <span className="list_card_itself1">
                                                <textarea
                                                    className="aria_class"
                                                    placeholder="Enter a title for this card..."
                                                    rows="4"
                                                    cols="30"
                                                    onChange={event =>
                                                        this.setState({
                                                            text:
                                                                event.target
                                                                    .value
                                                        })
                                                    }
                                                />
                                            </span>
                                            <input
                                                className="color_button"
                                                type="submit"
                                                value="Add Card"
                                                onClick={() =>
                                                    this.addNewCard()
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                size="1x"
                                                className="delete_card"
                                                onClick={() => this.closeCard()}
                                            />
                                        </span>
                                    ) : null}
                                </div>

                                {this.state.flag_card ? (
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        {this.state.text}
                                    </NavLink>
                                ) : null}
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
                        <div className="list_wrap">
                            <div className="list_itself">
                                <div className="list_title_action">
                                    <input
                                        value="Doing "
                                        className="list_title"
                                    />

                                    <div className="list_actions">
                                        <NavLink
                                            to="/"
                                            className="points_link"
                                            onClick={e => {
                                                this.showMenu1(e);
                                            }}
                                        >
                                            ...
                                        </NavLink>

                                        {this.state.showMenu1 ? (
                                            <div
                                                className="menu_actions"
                                                ref={element => {
                                                    this.dropdownMenu = element;
                                                }}
                                            >
                                                <div className="title_menu">
                                                    <span>List Action</span>
                                                    <span
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
                                        find workplace
                                    </NavLink>
                                    {this.state.flag1 ? (
                                        <span>
                                            <span
                                                className="list_card_itself1
                                                "
                                            >
                                                <textarea
                                                    className="aria_class"
                                                    placeholder="Enter a title for this card..."
                                                    rows="4"
                                                    cols="30"
                                                    onChange={event =>
                                                        this.setState({
                                                            text1:
                                                                event.target
                                                                    .value
                                                        })
                                                    }
                                                />
                                            </span>
                                            <input
                                                className="color_button"
                                                type="submit"
                                                value="Add Card"
                                                onClick={() =>
                                                    this.addNewCard1()
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                size="1x"
                                                className="delete_card"
                                                onClick={() =>
                                                    this.closeCard1()
                                                }
                                            />
                                        </span>
                                    ) : null}
                                </div>

                                {this.state.flag_card1 ? (
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        {this.state.text1}
                                    </NavLink>
                                ) : null}
                                <NavLink
                                    to=""
                                    className="add_another_card"
                                    onClick={e => {
                                        this.addAnotherCard1(e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} size="1x" />{" "}
                                    Add another card
                                </NavLink>
                            </div>
                        </div>

                        <div className="list_wrap">
                            <div className="list_itself">
                                <div className="list_title_action">
                                    <input
                                        value="Done "
                                        className="list_title"
                                    />
                                    <div className="list_actions">
                                        <NavLink
                                            to="/"
                                            className="points_link"
                                            onClick={e => {
                                                this.showMenu2(e);
                                            }}
                                        >
                                            ...
                                        </NavLink>

                                        {this.state.showMenu2 ? (
                                            <div
                                                className="menu_actions"
                                                ref={element => {
                                                    this.dropdownMenu = element;
                                                }}
                                            >
                                                <div className="title_menu">
                                                    <span>List Action</span>
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
                                        find coffeshop
                                    </NavLink>
                                    {this.state.flag2 ? (
                                        <span>
                                            <span className="list_card_itself1">
                                                <textarea
                                                    className="aria_class"
                                                    placeholder="Enter a title for this card..."
                                                    rows="4"
                                                    cols="30"
                                                    onChange={event =>
                                                        this.setState({
                                                            text2:
                                                                event.target
                                                                    .value
                                                        })
                                                    }
                                                />
                                            </span>
                                            <input
                                                className="color_button"
                                                type="submit"
                                                value="Add Card"
                                                onClick={() =>
                                                    this.addNewCard2()
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                size="1x"
                                                className="delete_card"
                                                onClick={() =>
                                                    this.closeCard2()
                                                }
                                            />
                                        </span>
                                    ) : null}
                                </div>

                                {this.state.flag_card2 ? (
                                    <NavLink
                                        to="/"
                                        className="list_card_itself"
                                    >
                                        {this.state.text2}
                                    </NavLink>
                                ) : null}
                                <NavLink
                                    to=""
                                    className="add_another_card"
                                    onClick={e => {
                                        this.addAnotherCard2(e);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlus} size="1x" />{" "}
                                    Add another card
                                </NavLink>
                            </div>
                        </div>
                        <span
                            className="add_another_list"
                            onClick={() => this.addNewList()}
                        >
                            <FontAwesomeIcon icon={faPlus} size="1x" />
                            Add another list
                        </span>
                        {this.state.list_flag ? (
                            <span>
                                <span className="list_card_itself1">
                                    <input
                                        className="aria_class"
                                        placeholder="Enter list title..."
                                        onChange={event =>
                                            this.setState({
                                                text_list: event.target.value
                                            })
                                        }
                                    />
                                </span>

                                <input
                                    className="color_button"
                                    type="submit"
                                    value="Add List"
                                    onClick={() => this.addNewlist1()}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    size="1x"
                                    className="delete_card"
                                    onClick={() => this.closelist()}
                                />
                            </span>
                        ) : null}
                        {this.state.add_list ? (
                            <div className="list_wrap">
                                <div className="list_itself">
                                    <div className="list_title_action">
                                        <input
                                            value={this.state.text_list}
                                            className="list_title"
                                        />
                                        <div className="list_actions">
                                            <NavLink
                                                to="/"
                                                className="points_link"
                                                onClick={e => {
                                                    this.showMenu3(e);
                                                }}
                                            >
                                                ...
                                            </NavLink>

                                            {this.state.showMenu3 ? (
                                                <div
                                                    className="menu_actions"
                                                    ref={element => {
                                                        this.dropdownMenu = element;
                                                    }}
                                                >
                                                    <div className="title_menu">
                                                        <span>List Action</span>
                                                        <span
                                                            className="close_list_action"
                                                            onClick={e => {
                                                                this.closeMenu4(
                                                                    e
                                                                );
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
                                                                        Add
                                                                        card...
                                                                    </NavLink>
                                                                </li>
                                                                <li className="lii">
                                                                    <NavLink
                                                                        to=""
                                                                        className="choice_itself"
                                                                    >
                                                                        Copy
                                                                        List...
                                                                    </NavLink>
                                                                </li>
                                                                <li className="lii">
                                                                    <NavLink
                                                                        to=""
                                                                        className="choice_itself"
                                                                    >
                                                                        Move
                                                                        List...
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
                                                                        Move All
                                                                        Cards In
                                                                        This
                                                                        List...
                                                                    </NavLink>
                                                                </li>
                                                                <li className="lii">
                                                                    <NavLink
                                                                        to=""
                                                                        className="choice_itself"
                                                                    >
                                                                        Archive
                                                                        All
                                                                        Cards In
                                                                        This
                                                                        List...
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
                                                                        Archive
                                                                        This
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
                                    {this.state.flag3 ? (
                                        <span>
                                            <span className="list_card_itself1">
                                                <textarea
                                                    className="aria_class"
                                                    placeholder="Enter a title for this card..."
                                                    rows="4"
                                                    cols="30"
                                                    onChange={event =>
                                                        this.setState({
                                                            text3:
                                                                event.target
                                                                    .value
                                                        })
                                                    }
                                                />
                                            </span>
                                            <input
                                                className="color_button"
                                                type="submit"
                                                value="Add Card"
                                                onClick={() =>
                                                    this.addNewCard3()
                                                }
                                            />
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                size="1x"
                                                className="delete_card"
                                                onClick={() =>
                                                    this.closeCard3()
                                                }
                                            />
                                        </span>
                                    ) : null}
                                    {this.state.flag_card3 ? (
                                        <NavLink
                                            to="/"
                                            className="list_card_itself"
                                        >
                                            {this.state.text3}
                                        </NavLink>
                                    ) : null}
                                    <NavLink
                                        to=""
                                        className="add_another_card"
                                        onClick={e => {
                                            this.addAnotherCard3(e);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            size="1x"
                                        />{" "}
                                        Add another card
                                    </NavLink>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
