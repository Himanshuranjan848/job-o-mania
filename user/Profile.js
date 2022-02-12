import React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SwipeableViews from 'react-swipeable-views';
import './profile.css'
import TechUpdate from './TechUpdate';
import TechDetails from './TechDetails';
import BasicUpdate from './BasicUpdate';
import BasicDetails from './BasicDetails';
import DataService from '../../firebase/firebaseOperation'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage} from "../../firebase/firebaseConfig";
import Footer from '../../components/Footer';
import UserHeader from '../../components/UserHeader';
import Waves from '../../components/Waves';

import Auth from '../Auth/Auth';
import { useSelector} from 'react-redux';
import { selectUsername} from "../../userSlice"

function Profile() {

    const val1 = useSelector(selectUsername);
    const username = val1.user.username;
    console.log(val1);
    const [index, setIndex] = useState(0);
    const [openbasic, setOpenbasic] = useState(false);
    const [opentech, setOpentech] = useState(false);
    const [user , setUser] = useState({});

    const handleChange = (event, newValue) => {
      setIndex(newValue);
    };

    const handleChangeIndex = (index) => {
        setIndex(index)
      };
    

  const [image, setImage] = useState("https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg")

  const uploadImage =  async (e) => {
    let files = e.target.files;
    let img = files[0];
    let imageUrl = URL.createObjectURL(img);
    const storageRef = ref(storage,username);
    setImage(imageUrl);
    uploadBytes(storageRef, img).then(async (snapshot) => {
      
      const val = await getDownloadURL(snapshot.ref);
      await DataService.updateData("user", username , {img : val});
      console.log("Done ...")
      setImage(val);
       
    });
   }


  const getuser = async (usr)=>{
    const retuser = await DataService.getData("user", usr);
    const val1 = (await retuser?._document?.data?.value?.mapValue?.fields);
    setUser(val1);
    setImage(val1?.img?.stringValue)
    console.log(val1)
  } 

  useEffect(()=>{
    //console.log("calling firebase")
    getuser(val1.user.username);
  },[openbasic , opentech])


  if(val1.user.username == null) return <Auth></Auth>
  return <div className='profilepage'>
    <UserHeader/>
    <div className='profilecard'>
      <div className='profile__box'>
           <div>
               <img src={image}></img>
               <label for="image-uploader" class="image-selector">
              <i class="fa fa-camera"></i>
             </label>
             <input type="file"  id='image-uploader' onChange={uploadImage} style={{display:"none"}}/>
           </div>
           
          <h1 style={{textAlign:"center",marginBottom:"2rem"}}>{user?.Name?.stringValue} </h1>
      </div>
      <div>
         <Tabs value={index} onChange={handleChange} aria-label="icon label tabs example" centered="true">
            <Tab icon={<PersonIcon />} label="Basic Details" />
            <Tab icon={<EmojiEmotionsIcon/>} label="Skills" />
         </Tabs>
         <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
          
          { openbasic ? <BasicUpdate openbasicform={setOpenbasic} user={user}/> : <BasicDetails openbasicform={setOpenbasic} user={user}/>}
          { opentech ? <TechUpdate opentechform={setOpentech}  user={user}/> : <TechDetails opentechform={setOpentech} user={user}/>}
     
        </SwipeableViews>
      </div>
       {/* <Footer/> */}
  </div>
     <Waves/>
     <Footer/>
  </div>
}

export default Profile;
