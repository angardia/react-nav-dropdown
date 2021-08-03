import React from 'react';
import "./Navbar.css";

export default function Navbar(props) {
    return (
        <nav className="Navbar">
            <div className="Navbar-search" >
                <input className="Navbar_Input" type="text" value="" />
                <img className="Navbar_Icon" alt="search icon" src={require("../icons/search.svg").default} />
            </div>
            <ul className="Navbar-navlist">{props.children}</ul>
        </nav>
    )
}
