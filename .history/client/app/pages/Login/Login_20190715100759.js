import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
//import "../Login/login.scss";
import "../../pages/Login/login.scss"
import google_icon from "../../assets/images/google_Icon.png";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            msg: [],
            redirect: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("submit function");
        let data = { email: this.state.email, password: this.state.password };
        return fetch("/api/users/login", {
            method: "POST", // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(response => {
                // The response is a Response instance.
                // You parse the data into a useable format using `.json()`
                return response.json();
            })
            .then(data => {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                //console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                if (data.status == "success") {
                    localStorage.setItem("token", data.token);
                    this.setState({ msg: [], redirect: true });
                } else {
                    this.setState({ msg: data.msg, redirect: false });
                }
            });
    }

    render() {
        return (
            <section className="container_in_login">
                <div>
                    {this.state.redirect ? <Redirect to="/home" /> : null}
                </div>
                <div className="div_in_login">
                    <div>
                        {this.state.msg == "" ? null : (
                            <div className="error_div">
                                <p>{this.state.msg.message}</p>
                            </div>
                        )}
                    </div>
                    <h1 className="headline_label">Log in to Trello</h1>
                    <p>
                        <NavLink className="link_login" to="/signup">
                            or create an account
                        </NavLink>
                    </p>
                    <form
                        onSubmit={e => {
                            this.onSubmit(e);
                        }}
                    >
                        <div className="div_in_login">
                            <div className="div_in_login">
                                <label
                                    className="label_in_login"
                                    htmlFor="email"
                                >
                                    Email{" "}
                                    <span className="hint_label">
                                        (or username)
                                    </span>
                                </label>
                                <input
                                    className="input_for_login"
                                    type="email"
                                    name="email"
                                    id="username"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    autoCapitalize="off"
                                    autoFocus="autofocus"
                                    placeholder="e.g., dana.scully@fbi.gov"
                                    onChange={e => {
                                        this.onChange(e);
                                    }}
                                />
                                <label
                                    className="label_in_login"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="input_for_login"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="e.g., ••••••••••••"
                                    onChange={e => {
                                        this.onChange(e);
                                    }}
                                />
                            </div>
                            <input
                                className="login_button"
                                type="submit"
                                value="Log In"
                            />
                            <div className="google_button_login" tabIndex="0">
                                <img src={google_icon} width="25" height="25" />
                                <span className="google_label">
                                    Log in with Google
                                </span>
                            </div>
                        </div>
                    </form>
                    <p>
                        <a className="link_login" href="">
                            Log in with SSO
                        </a>
                    </p>
                    <NavLink className="link_login" to="/reset_password">
                        Forgot your password?
                    </NavLink>
                </div>
            </section>
        );
    }
}
