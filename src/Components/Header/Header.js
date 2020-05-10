import React from "react";
import './Header.css';
import icon1 from '../../Mask.png';
import icon2 from '../../Mask-2.png';
import {  NavLink } from "react-router-dom";


const Header = () => {
  
  return (
    <header>
      <h1>Semantix</h1>
      <nav>
        <ul>
          <li>
            <NavLink  to="/" exact  activeClassName="active" >Page 1<img src={icon1} alt=""/></NavLink>
          </li>
          <li>
            <NavLink  to="/page2" activeClassName="active">Page 2<img src={icon2} alt=""/></NavLink>
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Header;