import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Body} from "../../components/Body/body";
import {Resentllysearch} from "../../components/Resentllysearch/resentlly";
import {Homec}
export default class Home extends Component {
    render() {
        return (
            <div>
               <Header/>
               <div className="style-page">
               <Body/>

               </div>

                
            </div>
        );
    }
}
