import React from 'react';
import "./DropdownItem.css";

export default function DropdownItem(props) {
    return (
        <li>
            <a href="" className="DropdownItem">
                {props.children}
            </a>
        </li>

    )
}
