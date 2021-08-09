import './App.css';
import Dropdown from './Dropdown/Dropdown';
import Navbar from './Navbar/Navbar';
import Navitem from './Navbar/NavItem/Navitem';

import { ReactComponent as Write } from "./icons/write.svg";


function App() {
  return (
    <div>
      <Navbar>
        <Navitem icon={<Write />} />
        <Navitem icon={<Write />} />
        <Navitem icon={<Write />} />
        <Dropdown />
      </Navbar>
    </div>
  );
}

export default App;
