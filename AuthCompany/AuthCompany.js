import "./AuthCompany.css";
import { Button , TextField } from '@mui/material'
import { useRef, useState } from "react";

import { auth, provider } from '../../firebase/firebaseConfig'
import { signInWithPopup } from "firebase/auth";
import DataService from '../../firebase/firebaseOperation';

import {useDispatch , useSelector} from 'react-redux';
import {setActiveUser , selectUsername} from "./../../userSlice"
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";

function AuthCompany() {

  const Companyname = useRef();
  const ContactMail = useRef();
  const Name = useRef();

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const login = (e)=>{
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then(async (result) => {

        const user = result.user;
        const reguser = user.email.split("@");

        //console.log(user);

        try {
            const exist = await DataService.getData("company",reguser[0]);
        
            if (exist._document === null) {
                window.alert("No Company Account exist for this Email");
            }else{
                console.log(exist);
                dispatch(setActiveUser({email: reguser[0] , companyname : exist?._document?.data?.value?.mapValue?.fields?.companyname?.stringValue , img :  exist?._document?.data?.value?.mapValue?.fields?.img?.stringValue}));
                navigate('/company');
            }
        } catch (e) {
            console.error("Error occured");
        }

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;

    });
}

  const register = (e)=>{
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then(async (result) => {

        const user = result.user;
        const reguser = user.email.split("@");

        //console.log(user);

        try {
            const exist = await DataService.getData("company",reguser[0]);
            console.log(exist)
            if (exist._document === null) {
                dispatch(setActiveUser({email: reguser[0] , companyname : Companyname.current.value , img : user.photoURL}));
                setLoading(true)
                await DataService.addData("company", reguser[0],{ name : Name.current.value ,contact : ContactMail.current.value , companyname : Companyname.current.value  ,  img: user.photoURL, email: user.email });
                navigate('/company');
            }else{
                window.alert("user already registered")
            }
        } catch (e) {
            console.error("Error occured");
        }

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
    });
  }

 
  return <div className="AuthCompany">
      {loading ? <Loading/> : <></>}
  <div className="AuthCompany_Wrapper">
      <div className="AuthCompany_Wrapper_Left">
          <div className="AuthCompany_Form perfect-center">
              <h1 className="Login_Header">Company Login<img src="images/lock.png"></img></h1>
              <p className="Login_Header_Foot">Log in to see Changes  in Your Profile</p>
              <button className="Google_Sign_In_Company" onClick={login}><img src="./images/google.png"></img>Sign in With Google</button>
              <button className="Facebook_Sign_In_Company"><img src="./images/facebook.png"></img>Sign in With Facebook</button>
              <div className="Signup_Header">
                   <div className="Signup_Header_Text">
                       <hr style={{display:"inline-block", width:"14vh"}} />
                       <div className="Signup_Header_Text_Word">
                        Register Here
                       </div>
                       <hr style={{display:"inline-block", width:"14vh"}} />
                   </div>
              </div>
              <div className="Signup_Form">
                    <form onSubmit={register}>
                        <TextField id="outlined-basic" label="Company Name" style={{width:"20vw"}} variant="outlined" inputRef={Companyname} required/>
                        <hr className="myline"></hr>
                        <TextField id="outlined-basic" label="Your Name" style={{width:"20vw"}} variant="outlined" inputRef={Name} required/>
                        <hr className="myline"></hr>
                        <TextField id="outlined-basic" type="email" label="Contact Email" style={{width:"20vw"}} variant="outlined" inputRef={ContactMail} required/>
                        <hr className="myline"></hr>
                        <Button variant="outlined" style={{width:"20vw"}} type="submit"> Sign Up</Button>
                    </form>
              </div>
          </div>
      </div>
      <div className="AuthCompany_Wrapper_Right">
        <img className="AuthCompany_Right_Img perfect-center" src="./images/authuser.png"></img>
       </div>
  </div>
</div>;
}

export default AuthCompany;
