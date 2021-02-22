import React,{useState,useContext} from "react";
import {Link,  useLocation} from 'react-router-dom';

import {SidebarData} from '../../helpers/SidebarData';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpTwoToneIcon from '@material-ui/icons/ArrowDropUpTwoTone';

import {AppContext} from "../../State";
import {openSidebar} from "../../actions";
import './Sidebar.css';

const Sidebar= (props)=>{

    const location = useLocation();
    const {state, dispatch}=  useContext(AppContext);

    const [subNav,setSubNav]= useState(false);

    const showSubNav = ()=> setSubNav(!subNav); 

    const sidebarItems= (item,className)=>{
        return (
            <li className={className} id={location.pathname==item.link?"active":"non-active"}>
                <div className="icon">
                    {item.icon}
                </div>
            
                <div className="title">
                    {item.title}
                </div>
                {item.children && !subNav && ( 
                    <ArrowDropDownIcon id="top-icon" fontSize='large' color='primary' style={{color:'white',fontSize: '20px'}} />
                )}
                {item.children && subNav && ( 
                    <ArrowDropUpTwoToneIcon id="top-icon" fontSize='large' color='primary' style={{color:'white',fontSize: '20px'}} />
                )}
            </li>
        );
    }


    if(!state.openSidebar)
        return (
            /*<div className="no-sidebar">
                <ArrowForwardIosIcon id="top-icon" fontSize='large' color='primary' style={{color:'black',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(true))} />
            </div>*/
            <></>
        );

    return (
        <div className="sidebar">
            <ViewHeadlineIcon id="top-icon" fontSize='large' color='primary' style={{color:'white',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(false))} />
            <ul className="sidebar-list">
                {SidebarData(state).map((val,key)=>{
                    return (
                        <div key={key}>
                            <Link to={val.link} onClick={val.children && showSubNav}>
                                {sidebarItems(val,"sidebar-list-row")}
                            </Link>
                            {val.children && subNav && val.children.map((item,key)=>{
                                return (
                                    <Link to={item.link} key={key}>
                                       {sidebarItems(item,"submenu-list-row")}
                                    </Link>
                                );
                            })}
                        </div>
                    );
                })
                }
            </ul>
        </div>
    );
}
      
export default Sidebar;