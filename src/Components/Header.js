// import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


// export default class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                 <NavLink to="/">Home</NavLink>x
//                 <NavLink to="/about">About</NavLink>x
//                 <NavLink to="/photography">Photos</NavLink>x
//                 <NavLink to="/code">Code</NavLink>x
//                 <NavLink to="/contact">Contact</NavLink>
//             </div>
//         )
//     }
// }



//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { SiAboutDotMe, SiVisualstudiocode } from "react-icons/si";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GrContact } from "react-icons/gr";


import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "." : ".  Kubisiak"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape='circle'>

              <MenuItem icon={<SiAboutDotMe />}><NavLink to="/">About</NavLink></MenuItem>
              <MenuItem icon={<SiVisualstudiocode />}><NavLink to="/code">Code</NavLink></MenuItem>
              <MenuItem icon={<HiOutlinePhotograph />}> <a href="https://kubisiak.darkroom.tech/"  target="_blank" rel="noopener noreferrer">Photography</a> </MenuItem>
          <MenuItem icon={<GrContact />}><NavLink to="/contact">Contact</NavLink></MenuItem>
            </Menu>
          </SidebarContent>

        </ProSidebar>
      </div>
    </>
  );
};

export default Header;