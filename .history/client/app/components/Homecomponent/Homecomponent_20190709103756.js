import React ,{ Component } from "react";
import "../../components/Homecomponent/Homecomponent.scss";
import cat from "../../assets/images/cat.jpg";
import cat1 from "../../assets/images/cat1.jpg";
import Recently from "../../assets/images/Recently.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
   
    faPlus,
    faInfoCircle,
    faBell
} from "@fortawesome/free-solid-svg-icons";
import { img } from "../../assets/images/img.png";
export class Homecomponent extends Component{

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
    showMenu(event) {
        //event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        
        this.setState({ showMenu: false, showMember: false }, () => {
            document.removeEventListener("click", this.closeMenu);
        });
        
    }
    render(){

    return(
    <div className="container">
        
        <div className="padd">
            <div className="cardd">
                <ul className="cat">
                    <div className="cat-image1" >
                        <img src={cat1} className="cat-image" />
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
                <p onClick={() => this.showMenu ()}>create a board</p>
            </div>
        </div>
        <div>
                    {this.state.showMenu ? (
                        <div className="postion-card1">
                                            <div
                                                className="menu_actions"
                                                ref={element => {
                                                    this.dropdownMenu = element;
                                                }}
                                            >
                                                <div className="title_menu">
                                                    <span>Creat Team</span>
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
                                            </div>
                                        ) : null}
                    </div>
    </div>
    )
}};

export default Homecomponent;
