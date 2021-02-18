import React,{useContext} from "react";
import {Link,  useLocation} from 'react-router-dom';

import {SidebarData} from '../../helpers/SidebarData';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

import {AppContext} from "../../State";
import {openSidebar} from "../../actions";
import './Sidebar.css';

const Sidebar= (props)=>{

    const {state, dispatch}=  useContext(AppContext);

    const location = useLocation();

    if(!state.openSidebar)
        return (
            <div className="no-sidebar">
                <ArrowForwardIosIcon id="top-icon" fontSize='large' color='primary' style={{color:'black',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(true))} />
            </div>
        );

    return (
        <div className="sidebar">
            <ViewHeadlineIcon id="top-icon" fontSize='large' color='primary' style={{color:'white',fontSize: '50px'}} onClick={()=>dispatch(openSidebar(false))} />
            <ul className="sidebar-list">
                {SidebarData.map((val,key)=>{
                    return (
                        <Link to={val.link} key={key}>
                            <li className="sidebar-list-row" id={location.pathname==val.link?"active":"non-active"}>
                                <div id="icon">
                                    {val.icon}
                                </div>
                             
                                <div id="title">
                                    {val.title}
                                </div>
                            </li>
                        </Link>
                    );
                })
                }
            </ul>
        </div>
    );
}
      
export default Sidebar;