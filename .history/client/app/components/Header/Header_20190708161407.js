import React ,{ Component } from 'react';
import "../Header/Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { faHome, faSearch, faPlus, faInfoCircle, faBell } from "@fortawesome/free-solid-svg-icons";
   export class  Header extends Component{
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
    render(){

    return(
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
            <span className="member_circle"  onClick={() => this.showMenu ()}>SA</span>
        </div>
        <div>
                    {this.state.showMenu ? (
                                            <div
                                                className="menu_actions"
                                                ref={element => {
                                                    this.dropdownMenu = element;
                                                }}
                                            >
                                                <div className="title_menu">
                                                    <span>Creat Team</span>
                                                    <NavLink
                                                        to="/home"
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
                                                    <form className="nammess">
                                                    <label className="color_texts">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="text_names"
                                                        type="text"
                                                        name="name"
                                                    />
                                                    <label className="color_texts">
                                                        Description{" "}
                                                    </label>
                                                    <span>
                                                        <textarea
                                                            rows="4"
                                                            cols="50"
                                                            className="text_names1"
                                                        />
                                                    </span>

                                                    <span className="create-button">
                                                        <button >Create</button>
                                                    </span>
                                                    
                                                </form>
                                                        <hr className="_hr" />
                                                        <div>
                                                <p className="pragraph11">A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</p>
                                            </div>
                                                       
                                                        
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}
                    </div>
    </header>
    )
    }
};

export default Header;