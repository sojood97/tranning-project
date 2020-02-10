import React, { Component } from "react";
import "../../pages/signup/signup.scss";
import { NavLink } from "react-router-dom";
export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            dataForSignup: "",
            gender: "",
            flag: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender
        };
        return fetch("/api/users/signup", {
            method: "post",
            body: JSON.stringify(user),
            headers: new Headers({
                "content-Type": "application/json"
            })
        })
            .then(function (response) {
                // The response is a Response instance.
                // You parse the data into a useable format using .json()
                return response.json();
            })
            .then(data => {
                this.setState({ dataForSignup: data, flag: true });

                // data is the parsed version of the JSON returned from the above endpoint.
                console.log(data);
            });
    }

    render() {
        return (
            <div className="all">
                <form onSubmit={e => { this.onSubmit(e); }}>

                    <div>
                        {this.state.flag ? (
                            <div className="email_not_found">
                                {this.state.dataForSignup}
                            </div>
                        ) : null}
                    </div>

                    <div className="title">
                        <label>Create a Trello Account</label>
                    </div>

                    <div className="link">
                        <NavLink to="/login">
                            or sign in to your account
                        </NavLink>
                    </div>
                    <div className="name">
                        <label className="color_text">Name</label>
                        <input
                            className="text_name"
                            onChange={event =>
                                this.setState({ name: event.target.value })
                            }
                            placeholder="e.g ,Calvi and Hobbes"
                            type="text"
                            name="name"
                        ></input>
                    </div>

                    <div className="gender">
                        <label className="title_gender">Gender</label>
                        <div className="genger_selection_area">
                            <label className="container">Male
                                <input type="radio" name="radio" value="male" onChange={event =>
                                    this.setState({ gender: event.target.value })} />
                                <span className="checkmark"></span>
                            </label>
                            <label class="container">Female
                                <input type="radio" name="radio" value="female" onChange={event =>
                                    this.setState({ gender: event.target.value })} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className="email">
                        <label className="color_text1">Email</label>
                        <input
                            className="text_email"
                            onChange={event =>
                                this.setState({ email: event.target.value })
                            }
                            type="Email"
                            placeholder="e.g , Calvin@gross.com"
                            name="email"
                        />
                    </div>

                    <div className="password">
                        <label className="color_text2">Password</label>
                        <input
                            className="text_pasword"
                            onChange={event =>
                                this.setState({ password: event.target.value })
                            }
                            placeholder="e.g., ••••••••••••"
                            type="Password"
                            name="pasword"
                        />
                    </div>

                    <div className="new">
                        <button className="new_button">
                            {" "}
                            Create New Account
                        </button>
                    </div>

                    <div className="google">
                        <button className="google_button">
                            <img
                                className="image"
                                src={require("../../assets/images/google.png")}
                                width="30px"
                                height="20px"
                            />
                            Sign up with Google
                        </button>
                    </div>

                    <div className="privacy">
                        <label>
                            By creating an account, you agree to our
                            <a href="#"> Terms of Service</a>and{" "}
                            <a href="#"> Privacy Policy</a>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}
