import React from "react";
import "../../components/Homecomponent/Homecomponent.scss";
import cat from "../../assets/images/cat.jpg";
import Recently from "../../assets/images/Recently.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
    faHome,
    faSearch,
    faPlus,
    faInfoCircle,
    faBell
} from "@fortawesome/free-solid-svg-icons";
import { img } from "../../assets/images/img.png";
const Homecomponent = () => (
    <div className="container">
        
        <div className="padd">
            <div className="cardd">
                <ul className="cat">
                    <div>
                        <img src={cat} className="cat-image" />
                    </div>

                    <div>
                        <h1 className="h1">Stay on track and up to date</h1>
                        <p>
                            Invite people to boards and cards, leave comments,
                            add due dates, and we'll show the most important
                            activity here.
                        </p>
                    </div>
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
                <NavLink to="/home" className="board_icon5">
                    <FontAwesomeIcon icon={faPlus} />
                </NavLink>
                <p>create a board</p>
            </div>
        </div>
    </div>
);

export default Homecomponent;
