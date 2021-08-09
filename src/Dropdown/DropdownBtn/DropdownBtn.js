import React, { useContext } from 'react';
import "./DropdownBtn.css";

import { Context } from "../Dropdown.js";


export default function DropdownBtn() {
    const context = useContext(Context);

    function showMenu() {
        context.setShow(!context.show);
    }

    function hideMenu() {
        context.setShow(false);
    }
    return (
        <div className="DropdownBtn_Wrap">
            <button onClick={showMenu} onBlur={hideMenu} className="DropdownBtn">
                Button
            </button>
        </div>

    )
}
