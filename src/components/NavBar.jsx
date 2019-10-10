import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

export default class NavBar extends Component{
    render(){
        return(
        
            <div>
               
               <ul>
                      <li><NavLink to="/home">Home</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/posts">Posts</NavLink></li>
                      <li><NavLink to="/students">Students</NavLink></li>
             </ul>

               
               
            </div>
        
        );
    }
}









