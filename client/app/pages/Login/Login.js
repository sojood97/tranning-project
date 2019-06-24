import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Login/login.scss";
import google_icon from '../../assets/images/google_Icon.png';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/api/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => console.log(response.text()));
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("submit function");
        let data = { 'email': this.state.email, 'password': this.state.password };
        return fetch('/api/users', {
            method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        })
            .then(response => console.log(response.text()));
    }

    render() {
        return (
            <section className="container_in_login">
                <div className="div_in_login">
                    <h1 className="headline_label">Log in to Trello</h1>
                    <p><a className="link" href="">or create an account</a></p>
                    <form onSubmit={(e) => { this.onSubmit(e) }}>
                        <div className="div_in_login">
                            <div className="div_in_login">
                                <label className="label_in_login" htmlFor="email">Email <span className="hint_label">(or username)</span></label>
                                <input className="input_for_login" type="email" name="email" id="username" autoCorrect="off"
                                    spellCheck="false" autoCapitalize="off" autoFocus="autofocus"
                                    placeholder="e.g., dana.scully@fbi.gov" onChange={(e) => { this.onChange(e) }} />
                                <label className="label_in_login" htmlFor="password">Password</label>
                                <input className="input_for_login" type="password" name="password"
                                    id="password" placeholder="e.g., ••••••••••••" onChange={(e) => { this.onChange(e) }} />
                            </div>
                            <input id="login_button" type="submit" value="Log In" />
                            <div className="google_button" tabIndex="0">
                                <img src={google_icon} width='25' height='25' />
                                <span className="google_label">Log in with Google</span>
                            </div>
                        </div>
                    </form>
                    <p><a className="link" href="">Log in with SSO</a></p>
                    <NavLink className="link" to="/reset_password">Forgot your password?</NavLink>
                </div>
            </section >
        );
    }
}
