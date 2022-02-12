import React from 'react';
import './userheader.css'
import {useDispatch , useSelector} from 'react-redux';
import { setUserLogout} from "./../userSlice"
import { useNavigate } from "react-router-dom";


function UserHeader() {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const logout = (e)=>{
    e.preventDefault();
    dispatch(setUserLogout());
    navigate('/auth');
  }

  return <div className="userheader">
            <div className="userheader-logo userheader-btn">App Logo</div>
            <div className="userheader-title userheader-btn">App Title</div>
            <div className="userheader-logout userheader-btn" onClick={logout}>Logout</div>
            <div className="userheader-about userheader-btn">About</div>
            <div className="userheader-stats userheader-btn">Stats</div>
            <div className="userheader-jobs userheader-btn">Jobs</div>
</div>; 
}

export default UserHeader;
