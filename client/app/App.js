import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const headers = () => {
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('x-access-token', localStorage.getItem('token'))
    return h;
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            data: []
        };
    }

    componentDidMount() {
        //localStorage.clear('token');
        fetch('/api/users/me', {
            method: 'GET', // 'GET', 'PUT', 'DELETE', etc.
            headers: headers()
        })
            .then((response) => {
                // The response is a Response instance.
                // You parse the data into a useable format using `.json()`
                return response.json();
            }).then((data) => {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                //localStorage.setItem('token', data.token);
                if (data.auth) {
                    this.setState({ isLogin: true, data: [{ name: data.name, email: data.email }] });
                }
                else {
                    this.setState({ isLogin: false, data: [] });
                }
            });
    }

    render() {
        return (
            <div>
                {this.state.isLogin ? (<Redirect to="/home" data={this.state.data} />) : (<Redirect to="/login" />)}
            </div>
        );
    }
}
