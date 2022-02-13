import React, { useEffect, useState } from 'react';
import './stats.css'
import StatsCard from './StatsCard';
import DataService from '../../firebase/firebaseOperation';
import Waves from '../../components/Waves';
import CompanyFooter from '../../components/CompanyFooter';
import Company from '../company/Company';
import UserHeader from '../../components/UserHeader';

function Stats() {

  const lang = ["C","Java","C++","Python"]
  const [langcount, setlangcount] = useState([0,0,0,0])
  const web = ["Javascript","React","Angular","Node js"]
  const [webcount, setwebcount] = useState([0,0,0,0,0,0,0,0,0])
  const and = ["Native Android","Kotlin","Flutter","Swift for IOS"]
  const [andcount, setandcount] = useState([0,0,0,0])
  const db = ["Oracle","mongodb","firebase","My SQL"]
  const [dbcount, setdbcount] = useState([0,0,0,0])
  const uiux = ["Figma","Adobe XD","Illustrator","Sketch"]
  const [uiuxcount, setuiuxcount] = useState([0,0,0,0])
  const core = ["Operating Systems","Computer Networks", "DBMS", "OOPS"]
  const [corecount, setcorecount] = useState([0,0,0,0])

  const getAllData = async() => {
       console.log("Calling firebase")
       const  allSkills = await DataService.getAll('Skills');
      // console.log(allSkills)
       let zobcount = await DataService.getData("Skills","zobcount");
       zobcount = await zobcount?._document?.data?.value?.mapValue?.fields?.zobcount?.integerValue
      // console.log(zobcount)
       allSkills.forEach((doc) => {
              if(doc.id === "language")setlangcount(doc.data().language.map(val => (val/zobcount)*100))
              else if(doc.id === "web")setwebcount(doc.data().web.map(val => (val/zobcount)*100))
              else if(doc.id === "android") setandcount(doc.data().android.map(val => (val/zobcount)*100))
              else if(doc.id === "database") setdbcount(doc.data().database.map(val => (val/zobcount)*100))
              else if(doc.id === "photoshop") setuiuxcount(doc.data().photoshop.map(val => (val/zobcount)*100))
              else if(doc.id === "core") setcorecount(doc.data().core.map(val => (val/zobcount)*100))
              else{
                 //do nothing
              }
       });
  }

  useEffect(() => {
       getAllData();
  },[])

  return <div className='stats'>
         <UserHeader/>
         <h1>Have a look @ statistics of the in-demand technologies</h1>
         <div className='container-fluid content-box statsbox'>
            <div className='row'>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>      
                     <StatsCard icon={<i class="fas fa-code"></i>} data={lang} datacount={langcount}/>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                      <StatsCard icon={<i class="fab fa-chrome"></i>} data={web} datacount={webcount.slice(2,6)}/>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                      <StatsCard icon={<i class="fab fa-android"></i>} data={and} datacount={andcount}/>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                       <StatsCard icon={<i class="fas fa-database"></i>} data={db} datacount={dbcount}/>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                       <StatsCard icon={<i class="fas fa-paint-brush"></i>} data={uiux} datacount={uiuxcount}/>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-4 col-xl-4'>
                       <StatsCard icon={<i class="fas fa-book"></i>} data={core} datacount={corecount}/>
                </div>
            </div>
         </div>
         <p>Note : The percentage of any tech-Stack denotes in how many job posts that particular tech-stack has been considered out of all the job posts done on our website !!! We have maintained this data for you , so that you can enhance your skillset wisely and efficiently...</p>
      
      <CompanyFooter/>
  </div>;
}

export default Stats;
