import React, { Children, useState } from 'react'
import { FaBars,FaHome,FaUserAlt
} from "react-icons/fa";
import { AiFillContacts } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen,setIsOpen]=useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
       
        {
            path:"/home",
            name:"Home",
            icon:<FaHome />

        },
        {
            path:"/Skills",
            name:"Skills",
            icon:<FaHome />

        },
        {
            path:"/project",
            name:"Project",
            icon:<FaHome />

        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<AiFillContacts />
        },
    ]
  return (
    <div className='sidebarContainer'>
        <div style={{width:isOpen ? "250px" : "50px"}} className='sidebar'>
            <div className="top_section">
                <h1 style={{display:isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft:isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div style={{display:isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar