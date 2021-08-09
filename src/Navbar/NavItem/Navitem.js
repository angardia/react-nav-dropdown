import React, { useState } from 'react';
import "./Navitem.css";

export default function Navitem(props) {

    return (
        <li className="nav-item">
            <a href="#" className="nav-item-icon">
                {props.icon}
            </a>
        </li>
    )
}
