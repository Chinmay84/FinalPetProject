import React from 'react'
import '../../App.css'
import { GiCat } from "react-icons/gi";
import { useEffect } from 'react'
import { LogoutAction } from '../../Redux/Action/LogoutAction'

import {
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";

import { GoSignOut } from "react-icons/go"

import $ from 'jquery';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const Logout = () => {
    dispatch(LogoutAction());
    //    localStorage.removeItem("user");
    history.push("/");
  }


  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <GiCat className="navbar__logo" />
        </div>
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Search"
          />
          <FaSistrix className="navar__searchIcon" />
        </div>
      </div>
      <div className="navbar__middle">
        <span className="middleIcon">
          <FaHome className="navbar__middle-icons btn-outline-primary" />
        </span>
        <span className="middleIcon">
          <FaFontAwesomeFlag className="navbar__middle-icons btn-outline-primary" />
          <span className="navbar__notify">3</span>
        </span>
        <span className="middleIcon">
          <FaVideo className="navbar__middle-icons btn-outline-primary" />
          <span className="navbar__notify">7</span>
        </span>
      <NavLink exact to="/userlist">
        <span className="middleIcon">
          <span className="navbar__middle-icons btn-outline-primary" ><i class="fas fa-user-friends"></i></span>
        </span>
      </NavLink>
      </div>

      <div className="navbar__last btn-outline-primary">
        <span className="navbar__last-section">
          <GoSignOut onClick={Logout} />
        </span>
      </div>
    </div>
  )
}

export default Navbar



















