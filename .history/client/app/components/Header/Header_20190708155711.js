import React from 'react';
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { faHome, faSearch, faPlus, faInfoCircle, faBell } from "@fortawesome/free-solid-svg-icons";
   export const Header = () => (
    <header className="board_header">
        <NavLink to="/home" className="board_icon" ><FontAwesomeIcon icon={faHome} /></NavLink>
        <NavLink to="/home" className="board_icon"><FontAwesomeIcon icon={faTrello} /> Boards</NavLink>
        <NavLink to="/home" className="board_icon">
            <input
                type="text"
                className="search_input"
            />
            <FontAwesomeIcon icon={faSearch} />
        </NavLink>
        <span className="trello_text_span">
            <NavLink to="/home" className="trello_link_span">
                <FontAwesomeIcon icon={faTrello} />
                Trello
            </NavLink>
        </span>
        <div className="board_header_right">
            <NavLink to="/home" className="board_icon" ><FontAwesomeIcon icon={faPlus} /></NavLink>
            <NavLink to="/home" className="board_icon"><FontAwesomeIcon icon={faInfoCircle} /></NavLink>
            <NavLink to="/home" className="board_icon"><FontAwesomeIcon icon={faBell} /></NavLink>
            <span className="member_circle">S</span>
        </div>
    </header>
);

export default Header;