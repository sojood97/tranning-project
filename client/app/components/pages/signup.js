import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { TextField } from "@material-ui/core";
import '../../styles/signup.scss';
import {google} from '../images/google.png';
import {icon} from '../images/google.png';
export class Signup extends Component {

  render() {
    return (



      <div >
        <form >
          <div className="title" >

            <label  >
              Create A Trello Account

           </label>
          </div>

          <div className="link">
            <a href="#"  >or sign in to your account</a>
          </div>
          <div className="name">
            <label className="color_text" >
              Name
               <input className="text_name" placeholder="e.g ,Calvin and Hobbes" type="text" name="name" />

            </label>
          </div>
          <div className="email">
            <label className="color_text1">
              Email
             <input className="text_email" type="Email" placeholder="e.g , Calvin@gross.com" name="email" />
            </label>
          </div>

          <div className="password">

            <label className="color_text2">
              Password
             <input className="text_pasword" placeholder="e.g., ••••••••••••" type="Password" name="pasword" />
            </label>
          </div>

          <div className="new">

            <button className="new_button"> Create New Account</button>
          </div>

          <div className="google">


            <button className="google_button"> <img className="image" src={require('../images/google.png')}width="25px" height="25px"/>Sign up with Google</button>

          </div>
        </form>
      </div>

    )

  }
}
