import React, { useState } from 'react';
import DropdownItem from './DropdownItem/DropdownItem';
import "./Dropdown.css";

export default function Dropdown() {

    return (
        <nav className="Dropdown" >
          <DropdownItem>test</DropdownItem>
          <DropdownItem>test</DropdownItem>
          <DropdownItem>test</DropdownItem>
        </nav>
    )
}
