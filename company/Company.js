import React, { useState,useEffect } from 'react';
import './company.css'
import JobPost from './JobPost';
import JobForm from './JobForm';
import CompanyHeader from '../../components/CompanyHeader';
import CompanyFooter from '../../components/CompanyFooter';
import DataService from "../../firebase/firebaseOperation"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage} from "../../firebase/firebaseConfig";

import {useDispatch , useSelector} from 'react-redux';
import { selectUsername, setActiveUser } from "./../../userSlice"
import AuthCompany from '../AuthCompany/AuthCompany';

import Loading from '../../components/Loading';


function Company() {

   let username = useSelector(selectUsername);
   let dispatch = useDispatch();

   
  const [openform, setOpenform] = useState(false);
  const [user , setUser] = useState({})
  const [image, setImage] = useState("images/avatar.jpg")

  const uploadImage =  async (e) => {
   //console.log("himanshu sinsgj")
   let files = e.target.files;
   let img = files[0];
   let imageUrl = URL.createObjectURL(img);
   //console.log(username)
   const storageRef = ref(storage,username.user.email);
   setImage(imageUrl);
   uploadBytes(storageRef, img).then(async (snapshot) => {
     const val = await getDownloadURL(snapshot.ref);
     await DataService.updateData("company", username.user.email , {img : val});
     setImage(val);
     //console.log(val);
     dispatch(setActiveUser({companyname:username.user.companyname , email : username.user.email , img : val}));
   });
 
}

  const [loading, setloading] = useState(true);

  useEffect(()=>{
     //console.log(username);
     getuser(username.user.email);
  },[openform])

 const getuser = async (usr)=>{
    if(usr!==null || usr !== undefined){
      const retuser = await DataService.getData("company", usr);
      const val1 = (await retuser?._document?.data?.value?.mapValue?.fields);
      setUser(val1);
      setImage(val1?.img?.stringValue)
    }
  
   // console.log(val1)
 }

 useEffect(() => {
      setTimeout(() => {
         setloading(false)
      },2000)
 },[])


 if(username.user.companyname == null) return <AuthCompany></AuthCompany>
  return <div className='company'>
     {loading ? <Loading/> : <></>}
     <CompanyHeader/>
      <div className='company__details'>
         {/* <img src={image}></img> */}
         <div className='company__image'>
             <img src={image}/>
         <label for="image-uploader" class="image-selector">
              <i class="fa fa-camera"></i>
            </label>
            <input type="file"  id='image-uploader' onChange={uploadImage} style={{display:"none"}}/>
         </div> 
         <div className='details__box'>
           <div className="details__top">
              <h1>{user?.companyname?.stringValue}</h1>
              <p> <i class="fas fa-map-marker-alt"></i> India</p>
           </div>
           <div  className="details__bottom">
              <h3 className='recruiter__name'><span>Recruiter :</span>  {user?.name?.stringValue}</h3>
              <h3 className='recruiter__email'><span>Recruiter email :</span> {user?.contact?.stringValue}</h3>
           </div> 
      </div>
      </div>
      { openform ? 
       <JobForm openform={setOpenform}/>
       :
       <div className='xxx'>
        <div className='company__posts'>
           {
              user?.jobs?.arrayValue?.values?.map((jobid)=> <JobPost jobid={jobid.stringValue}/>)
          }  
        </div>
        <div style={{textAlign:"center"}}>
           <button class="techupdate-btn" onClick={() => setOpenform(true)}>Post a new Job</button>
         </div>
      </div>}

      <CompanyFooter/>
  </div>;
}

export default Company;
