import React, { Component } from "react";
import "../../components/Homecomponent/Homecomponent.scss";

import cat1 from "../../assets/images/cat1.jpg";
import Recently from "../../assets/images/Recently.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
export class Homecomponent extends Component {
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
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        this.setState({ showMenu: false, showMember: false }, () => {
            document.removeEventListener("click", this.closeMenu);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="padd">
                    <div className="cardd">
                        <ul className="cat">
                            <img src={cat1} className="cat-image" />

                            <h1 className="h1">Stay on track and up to date</h1>
                            <p>
                                Invite people to boards and cards, leave
                                comments, add due dates, and we'll show the most
                                important activity here.
                            </p>
                        </ul>
                    </div>
                </div>
                <div className="third-view">
                    <div className="recent">
                        <p>
                            <img src={Recently} className="image-recentlly" />
                            Recently Viewed
                        </p>
                    </div>

                    <div className="board-test3">
                        <ul className="board-test4" />
                        <p className="test">test</p>
                    </div>

                    <p className="links">LINKS</p>

                    <div className="create-board">
                        <span
                            onClick={() => this.showMenu()}
                            className="board_icon5"
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <p onClick={() => this.showMenu()}>create a board</p>
                    </div>
                </div>

                {this.state.showMenu ? (
                    <div
                        className="menu_member1"
                        ref={element => {
                            this.dropdownMenu = element;
                        }}
                    >
                        <div className="title_menu">
                            <input
                                className="creat-board-name"
                                type="text"
                                placeholder="Add board title"
                            />
                            <span
                                className="close_list_action"
                                onClick={e => {
                                    this.closeMenu(e);
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} size="1x" />
                            </span>
                        </div>
                        <div>
                            <div className="actions_div">
                                <ul className="ull">
                                    <li className="lii">
                                        <button className="button-create">
                                            create
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Homecomponent;
