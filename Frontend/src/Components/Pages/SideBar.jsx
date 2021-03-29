import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useHistory } from 'react-router-dom';
import Axios from "axios";
import EditProfile from '../Frontpages/HomePages/EditProfile';
import { useSelector } from 'react-redux';

const Sidebar = (props) => {
  //const history=useHistory();
  const email = useSelector(state => state.loginState.email);

  const ondeleteHandler = async () => {
    console.log(email);
    const result = await Axios.delete(`http://localhost:8080/api/unauthuser/delete/${email}`);
    props.history.push("/");
    console.log(result);
  }


  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >

          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Profile Page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile/edit" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user"> edit</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile/delete" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" > delete</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/forgotpassword" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                change Password
              </CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >

          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;






