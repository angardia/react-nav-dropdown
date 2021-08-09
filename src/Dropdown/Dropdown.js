import React, { useState, createContext } from 'react';
import DropdownList from "./DropdownList/DropdownList";
import DropdownItem from "./DropdownItem/DropdownItem";
import DropdownBtn from "./DropdownBtn/DropdownBtn";

import "./Dropdown.css";
export const Context = createContext();

export default function Dropdown() {

  const [show, setShow] = useState(false);

  return (
    <Context.Provider value={{
      show, setShow
    }}>
      <DropdownBtn></DropdownBtn>
      <DropdownList className="Dropdown" >
        <DropdownItem>test</DropdownItem>
        <DropdownItem>test</DropdownItem>
        <DropdownItem>test</DropdownItem>
      </DropdownList>
    </Context.Provider>
  )
}
