import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../reset_password/Rest_Password.scss';


export default class Reset_Password extends Component {
    render() {
        return (
            <div className="main_div">
                <header className="header_nav">
                    <div className="header_left">
                        <a href="" className="header_link">Home</a>
                    </div>
                    <div className="header_right">
                        <NavLink to="/login" className="header_link">Log In</NavLink>
                        <a href="" className="header_link">Sign Up</a>
                    </div>
                </header>
                <section className="body_section">
                    <div className="inner_section">
                        <h1 className="h1_for_reset">Reset Your Trello Password</h1>
                        <p>Submit your email address and we’ll send you a link to reset your password.</p>
                        <form className="form_in_reset">
                            <label htmlFor="email">Email</label>
                            <input className="input_for_reset" id="email" type="email" name="email" tabIndex="1" autoCorrect="off" spellCheck="false"
                                autoCapitalize="off" autoFocus="autofocus" ></input>
                            <input className="input_for_reset" tabIndex="2" type="submit" className="submit_button" value="Submit" />
                            <p className="quiet"> Psst … If it's any help, Trello requires that passwords be at least 8 characters long and does
                    <em>not</em> require you to include numbers or uppercase letters.
                     If that jogs your memory, you can <a href="" className="quiet_link">try logging in again</a>. </p>
                        </form>
                    </div>
                </section>
            </div>

        );
    }
}

