import React from "react";

import {Link} from 'react-router-dom';
export default Navbar;
function Navbar(){
  return (
    <nav>
      <Link to="/about" className="link">
      About
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to ="/contact">Contact</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to ="/">Home</Link>
    </nav>
  );
}