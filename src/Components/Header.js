import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import * as faIcons from 'react-icons/fa';




export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavLink className='headerLink' to='/'>about</NavLink>
        <NavLink className='headerLink' to='/code'>code</NavLink>
        <a
          className='headerLink'
          href='https://kubisiak.darkroom.tech/'
          target='_blank'
          rel='noopener noreferrer'
        >  
          photography
        </a>
        <NavLink className='headerLink' to='/contact'>contact</NavLink>
        <NavLink className='headerLink' to='/comments'>comments</NavLink>
      </div>
    );
  }
}

// //import useState hook to create menu collapse state
// import React, { useState } from "react";

// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarContent,
// } from "react-pro-sidebar";

// //import icons from react icons
// import { SiAboutDotMe, SiVisualstudiocode } from "react-icons/si";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import { GrContact } from "react-icons/gr";

// import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

// //import sidebar css from react-pro-sidebar module and our custom css
// import "../Styles/styles.css";
// import "../Styles/Header.css";

// const Header = () => {

//     //create initial menuCollapse state using useState hook
//     const [menuCollapse, setMenuCollapse] = useState(true)

//     //create a custom function that will change menucollapse state from false to true and true to false
//   const menuIconClick = () => {
//     //condition checking to change state from true to false and vice versa
//     menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
//   };

//   return (
//     <>
//       <div id="header">
//           {/* collapsed props to change menu size using menucollapse state */}
//         <ProSidebar collapsed={menuCollapse}>
//           <br></br>
//           <SidebarHeader>
//           <div className="logotext">
//               {/* small and big change using menucollapse state */}
//               <p>{menuCollapse ? "." : ".  Kubisiak"}</p>
//             </div>
//             <div className="closemenu" onClick={menuIconClick}>
//                 {/* changing menu collapse icon on click */}
//               {menuCollapse ? (
//                 <FiArrowRightCircle/>
//               ) : (
//                 <FiArrowLeftCircle/>
//               )}
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <Menu iconShape='circle'>

//               <MenuItem icon={<SiAboutDotMe />}><NavLink to="/">about</NavLink></MenuItem>
//               <MenuItem icon={<SiVisualstudiocode />}><NavLink to="/code">code</NavLink></MenuItem>
//               <MenuItem icon={<HiOutlinePhotograph />}> <a href="https://kubisiak.darkroom.tech/"  target="_blank" rel="noopener noreferrer">photography</a> </MenuItem>
//           <MenuItem icon={<GrContact />}><NavLink to="/contact">contact</NavLink></MenuItem>
//             </Menu>
//           </SidebarContent>
//         </ProSidebar>
//       </div>
//     </>
//   );
// };
// export default Header;
