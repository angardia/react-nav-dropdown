import React, { useContext } from 'react';
import { Context } from "../Dropdown";
import "./DropdownList.css";



export default function DropdownList(props) {

    const context = useContext(Context);

    return (
        <>
            {context.show && <ul className='DropdownList'>
                {props.children}
            </ul>}
        </>
    )
}