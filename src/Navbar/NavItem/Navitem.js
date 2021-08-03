import React, { useState } from 'react';
import "./Navitem.css";

export default function Navitem(props) {

    const [navState, setNavState] = useState(false);

    function toggle() {
        setNavState((prevState) => !prevState);
        console.log(navState);
    }

    return (
        <li className="nav-item">
            <a href="#" className="nav-item-icon" onClick={toggle}>
                {props.icon}
            </a>

            {navState && props.children}
        </li>
    )
}
