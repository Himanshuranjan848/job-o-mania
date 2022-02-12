import "./Landing.css"
import Footer from "../../components/Footer";
import Waves from "../../components/Waves";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import {useState} from 'react'


function Landing() {

    let navigate = useNavigate();

    const companylogin = (e)=>{
        e.preventDefault();
        navigate('/authCompany');
    }
    const userlogin = (e)=>{
        e.preventDefault();
        navigate('/auth');
    }

    const [loading, setloading] = useState(true)

useEffect(() => {
    setTimeout(() => {
        setloading(false)
    }, 1000)
})

  return <div className="Landing">
      {loading ? <Loading/> : <></>}
      <div className="Landing_Header">
          <div className="App_Logo">App Logo</div>
          <div className="App_Title">Job-O-Mania</div>
          <div className="App_About" onClick={() => navigate('/about')}>About</div>
      </div>
      <div className="Landing_Wrapper">
          <div className="Landing_Left">
              {/* <h1 className="Landing_Header">MY WEB APP</h1> */}
              <h1 className="Landing_Text one">Get Notified About Jobs and Internships</h1>
             
              <div className="Landing_Card">
                  <div className="Landing_Companies">
                      <h2 className="Landing_Card_Header">For Companies</h2>
                      <p className="Landing_Card_Text">Here, Any Company can register and can use this platform to reach job Seekers.</p>
                      <button className="Btn-Signup" onClick={companylogin}>Start Hiring With us</button>
                  </div>
                  <div className="Landing_Seeker">
                      <h2  className="Landing_Card_Header">For Students</h2>
                      <p className="Landing_Card_Text">Here, A job Seeker can use this platform to get informed about the latest opportunities</p>
                      <button className="Btn-Signup" onClick={userlogin}>Start Search With us</button>
                  </div>
              </div>
          </div>
          <div className="Landing_Right">
            {/* <div className="Landing_About" ><div><h2 onClick={myfun} >About</h2></div></div> */}
            <img className="img1" src="./images/landingpage3.png"></img>
            <img className="img2" src="./images/landingpage2.png "></img>
        </div>
            
      </div>
      <Waves/>
      <Footer/>
  </div>;
}

export default Landing;
