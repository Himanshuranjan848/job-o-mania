import React from 'react';
import './companyheader.css'
import {useDispatch , useSelector} from 'react-redux';
import { setUserLogout} from "./../userSlice"
import { useNavigate } from "react-router-dom";

function CompanyHeader() {
 
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const logout = (e)=>{
    e.preventDefault();
    dispatch(setUserLogout());
    navigate('/authCompany');
  }


  return <div className="companyheader">
  <div className="companyheader-logo companyheader-btn"></div>
  <div className="companyheader-title companyheader-btn"><span className='perfect-center'>App Title</span></div>
  <div className="companyheader-about companyheader-btn" onClick={logout}><span className='perfect-center'>Logout</span></div>
  <div className="companyheader-logout companyheader-btn"><span className='perfect-center'>About</span></div>
</div>; ;
}

export default CompanyHeader;
