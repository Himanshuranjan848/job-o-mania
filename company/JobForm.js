import React, {useEffect, useState} from 'react';
import './jobform.css'
import { TextField, MenuItem } from "@mui/material";
import DataService from "../../firebase/firebaseOperation"
import { arrayUnion } from 'firebase/firestore';

import {useDispatch , useSelector} from 'react-redux';
import { selectUsername } from "./../../userSlice"



function JobForm({openform}) {

   let username = useSelector(selectUsername);

   const [skills , updateskill] = useState();

    /* ------------------------------- Left Form Data ----------------------------------------*/
    const [date, setDate] = useState("06-02-2022")
    const [location, setLocation] = useState("Remote");
    const [salary, setSalary] = useState("3-5L");
    const [workexperience, setWorkexperience] = useState("0-2 years")
    const [link, setlink] = useState("")
    const [degree, setDegree] = useState("Any")
    const [branch, setBranch] = useState("Any")
    const [year, setYear] = useState("Any")
    const [cgpa, setCgpa] = useState(7)
    const [category, setCategory] = useState("Software Intern")

  const handleLeft = (e, category) => {
      if(category === "category") setCategory(e.target.value)
      else if(category === "date") setDate(e.target.value)
      else if(category === "location") setLocation(e.target.value)
      else if(category === "salary") setSalary(e.target.value)
      else if(category === "workexperience") setWorkexperience(e.target.value)
      else if(category === "link") setlink(e.target.value)
      else if(category === "degree") setDegree(e.target.value)
      else if(category === "branch") setBranch(e.target.value)
      else if(category === "year") setYear(e.target.value)
      else if(category === "cgpa") setCgpa(e.target.value)
  }
  /* ------------------------------------  Right Form Data    ----------------------------------------------*/

  const languages = ["Java", "C","C++","Python"]
  const languages_icon = ["images/java.png", "images/c.png","images/c++.png","images/python.png"]
  const web = ["Html","Css","Javascript","React","Angular","Node js","Vue.Js","PHP","Ruby on Rails"]
  const web_icon = ["images/html.png","images/css.png","images/js.png","images/react.png","images/angular.png","images/nodejs.png","images/vuejs.svg","images/php.png","images/ruby.png"]
  const android = ["Native Android","Kotlin","Flutter","Swift for IOS"]
  const android_icon = ["images/native.png","images/kotlin.png","images/flutter.png","images/swift.png"]
  const core = ["Operating Systems","Computer Networks", "DBMS", "OOPS"]
  const databases = ["Oracle","mongodb","firebase","My SQL"]
  const databases_icon = ["images/oracle.png","images/mongodb.jpeg","images/firebase.svg","images/mysql.png"]
  const uiux = ["Figma","Adobe XD","Illustrator","Sketch"];
  const uiux_icon = ["images/figma.png","images/xd.png","images/illustrator.png","images/sketch.png"]

  const [selectedlanguage, setLanguage] = useState([]);
  const [selectedweb, setWeb] = useState([]);
  const [selectedandroid, setAndroid] = useState([]);
  const [selectedcore, setCore] = useState([]);
  const [selecteddatabase, setDatabase] = useState([]);
  const [selecteduiux, setUiux] = useState([]);

  const handleRight = (ci, category) => {
       if(category === "language"){
          const idx = selectedlanguage.indexOf(ci);
          if(idx === -1) setLanguage(selectedlanguage.concat(ci))
          else setLanguage(selectedlanguage.slice(0,idx).concat(selectedlanguage.slice(idx+1)))
       }
       else if(category === "web"){
          const idx = selectedweb.indexOf(ci);
          if(idx === -1) setWeb(selectedweb.concat(ci))
          else setWeb(selectedweb.slice(0,idx).concat(selectedweb.slice(idx+1)))
       }
       else if(category === "android"){
          const idx = selectedandroid.indexOf(ci);
          if(idx === -1) setAndroid(selectedandroid.concat(ci))
          else setAndroid(selectedandroid.slice(0,idx).concat(selectedandroid.slice(idx+1)))
       }
       else if(category === "core"){
          const idx = selectedcore.indexOf(ci);
          if(idx === -1) setCore(selectedcore.concat(ci))
          else setCore(selectedcore.slice(0,idx).concat(selectedcore.slice(idx+1)))
       }
       else if(category === "database"){
          const idx = selecteddatabase.indexOf(ci);
          if(idx === -1) setDatabase(selecteddatabase.concat(ci))
          else setDatabase(selecteddatabase.slice(0,idx).concat(selecteddatabase.slice(idx+1)))
       }
       else if(category === "uiux"){
          const idx = selecteduiux.indexOf(ci);
          if(idx === -1) setUiux(selecteduiux.concat(ci))
          else setUiux(selecteduiux.slice(0,idx).concat(selecteduiux.slice(idx+1)))
       }
  }

  const getskill = async ()=>{
   const retuser = await DataService.getAll("Skills");
   const val1 = (await retuser?.docs);
   updateskill(val1);
   console.log(val1)
}

useEffect(()=>{
   getskill();
  },[])

 const handleSubmit = async (e)=>{
   e.preventDefault();
   const userlogged = username.user.email;
   //console.log(userlogged)
   //console.log(username)
    const val = await DataService.addJobData("jobs",{
         "company":username.user.companyname,
         "date":date,
         "location":location,
         "salary":salary,
         "experience":workexperience,
         "link":link,
         "degree":degree,
         "branch":branch,
         "year":year,
         "cgpa":cgpa,
         "category":category,
         "language":selectedlanguage,
         "web":selectedweb,
         "android":selectedandroid,
         "core":selectedcore,
         "database":selecteddatabase,
         "uiux":selecteduiux,
         "img": username.user.img,
      });

      // console.log(val.id)
      if(val !== undefined)
       await DataService.updateData("company",userlogged , {
         jobs : arrayUnion(val.id),
      })


      let arr =[0,0,0,0];
      selectedandroid?.map((idx)=> arr[idx] = 1);
      skills[0]?._document?.data?.value?.mapValue?.fields?.android?.arrayValue?.values?.map((val, index)=>{
         
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","android" , {
         android : arr,
      })

      arr =[0,0,0,0];
      selectedcore?.map((idx)=> arr[idx] = 1);
     
      skills[1]?._document?.data?.value?.mapValue?.fields?.core?.arrayValue?.values?.map((val, index)=>{
       
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","core" , {
         core : arr,
      })
      arr =[0,0,0,0];
      selecteddatabase?.map((idx)=> arr[idx] = 1);
     
      skills[2]?._document?.data?.value?.mapValue?.fields?.database?.arrayValue?.values?.map((val, index)=>{
         
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","database" , {
         database : arr,
      })
      arr =[0,0,0,0];
      selectedlanguage?.map((idx)=> arr[idx] = 1);
     
      skills[3]?._document?.data?.value?.mapValue?.fields?.language?.arrayValue?.values?.map((val, index)=>{
         
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","language" , {
         language : arr,
      })

      arr =[0,0,0,0];
      selecteduiux?.map((idx)=> arr[idx] = 1);
     
      skills[4]?._document?.data?.value?.mapValue?.fields?.photoshop?.arrayValue?.values?.map((val, index)=>{
         
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","photoshop" , {
         photoshop : arr,
      })
      arr =[0,0,0,0,0,0,0,0,0];
      selectedweb?.map((idx)=> arr[idx] = 1);
     
      skills[5]?._document?.data?.value?.mapValue?.fields?.web?.arrayValue?.values?.map((val, index)=>{
         
         arr[index] = parseInt(arr[index]) + parseInt(val?.integerValue);
      })
      await DataService.updateData("Skills","web" , {
         web : arr,
      })

      await DataService.updateData("Skills", "zobcount",{
         zobcount : parseInt(skills[6]?._document?.data?.value?.mapValue?.fields?.zobcount?.integerValue) + parseInt(1),
      })
   

      openform(false);
      sendMail();

      
}

  const sendMail =  async () => {
       const allUsers = await DataService.getAll("user")

       const shortlisted=[]; // shortlisted candidates

       allUsers.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
         const userData = doc.data()
         let skills = []

         let companyData = [selectedlanguage, selectedweb, selectedandroid, selecteddatabase, selecteduiux, selectedcore]
         
         skills.push(userData.language);  
         skills.push(userData.web);   
         skills.push(userData.android);  
         skills.push(userData.database);
         skills.push(userData.uiux);
         skills.push(userData.core);
         
         var flag;
         for(var i=0;i<6;i++)  //for every skill of user
         {
               flag=false;
               companyData[i].forEach((data)=>{
                  flag = flag || skills[i].includes(data);
                 });

             if(flag===false) break;
          }
         
          if(flag==true) shortlisted.push(doc.data().email);  
       });

       shortlisted.forEach((mail) => {
         //  console.log("cName => ",username.user.companyname);
         //  console.log("url => ",link);
         //  console.log("role => ",category);
         //  console.log("mail => ",mail);


      var details = {
          "cName":username.user.companyname,
          "url":link,
          "role":category,
          "mail":mail,
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

         fetch('https://mailsender2427.herokuapp.com/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
            //   'Content-Type': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
           }).then( () => {
            console.log("Mail sent to : ",mail);
          })
          .catch((error) => {
              console.log(error);
          })
       })
       
   }




  return <div className='jobform'>
  <div className='jobform__container'>
    <div className='close-btn'><i class="far fa-times-circle" onClick={() => openform(false)}></i></div>
  <table>
        <tr><td colSpan={2} style={{textAlign:"center"}}>Select Details</td></tr>
        <tr> <td>Deadline</td><td><TextField id="date" label="Last Date to Apply" type="date" defaultValue="2022-02-06" onChange={(e) => setDate(e.target.value)}/></td></tr>
        <tr> <td>Category</td> <td><TextField select label="Select Category" value={category}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"category")}>
                <MenuItem key={0} value="Software Developer">Software Developer</MenuItem>
                <MenuItem key={1} value="Software Intern">Software Intern</MenuItem>
             </TextField></td> </tr>
        <tr> <td>Location</td> <td><TextField select label="Select Location" value={location}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"location")}>
               <MenuItem key={0} value="Remote"> Remote</MenuItem>
               <MenuItem key={1} value="Banglore">Banglore</MenuItem>
            </TextField></td> </tr>
        <tr> <td>Salary</td> <td><TextField select label="Select Salary" value={salary}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"salary")}>
               <MenuItem key={0} value="3-5L">3-5L</MenuItem>
               <MenuItem key={1} value="6-8L">6-8L</MenuItem>
             </TextField></td> </tr>
        <tr> <td>Work Experience</td> <td><TextField select label="Minimum Work Experience" value={workexperience}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"workexperience")}>
              <MenuItem key={0} value="0-2 years">0-2 years</MenuItem>
              <MenuItem key={1} value="3-5 years">3-5 years</MenuItem>
            </TextField></td> </tr>
        <tr> <td>Degree</td> <td><TextField select label="Select Degree" value={degree}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"degree")}>
              <MenuItem key={0} value="Any">Any</MenuItem>
              <MenuItem key={0} value="B.Tech">B.Tech</MenuItem>
              <MenuItem key={1} value="M. Tech">M. Tech</MenuItem>
           </TextField></td> </tr>
        <tr> <td>Branch</td> <td><TextField select label="Select Branch" value={branch}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"branch")}>
              <MenuItem key={0} value="Any">Any</MenuItem>
              <MenuItem key={1} value="Computer Science and Engineering">Computer Science and Engineering</MenuItem>
              <MenuItem key={2} value="Electronics and Communication Engineering">Electronics and Communication Engineering</MenuItem>
              <MenuItem key={3} value="Electrical Engineering">Electrical Engineering</MenuItem>
           </TextField></td> </tr>
        <tr> <td>Passout Year</td> <td><TextField select label="Graduation Year" value={year}  variant="standard" style={{minWidth:"10rem"}} onChange={(e) => handleLeft(e,"year")}>
               <MenuItem key={0} value="Any">Any</MenuItem>
               <MenuItem key={1} value="2022">2022</MenuItem>
               <MenuItem key={2} value="2023">2023</MenuItem>
               <MenuItem key={3} value="2024">2024</MenuItem>
               <MenuItem key={4} value="2025">2025</MenuItem>
               <MenuItem key={5} value="2026">2026</MenuItem>
               </TextField></td> </tr>
        <tr> <td>CGPA</td> <td><TextField variant="standard" label="Minimum CGPA" type="number" value={cgpa} onChange={(e) => handleLeft(e,"cgpa")}/></td> </tr>
        <tr> <td>Job Link </td> <td><TextField variant="standard" label="Link for job post" type="text" value={link} onChange={(e) => handleLeft(e,"link")}/></td> </tr>
    </table>
    <div className='jobform__tech'>
      <div className='techcontainer'>
      <table>
          <tr><td colSpan={2} style={{textAlign:"center"}}>Select Tech Details</td></tr>
          <tr> <td>Languages</td> <td> <ul>{
                languages.map((item, index) => {
                    const classname = selectedlanguage.indexOf(index) === -1 ? "" : "select";
                    return <li key={index} className={classname} onClick={() => handleRight(index,"language")}> <img src={languages_icon[index]} alt='loading...'></img> {item}</li>
              })}
          </ul></td> </tr>
          <tr>  <td>Web Technology</td> <td> <ul>{
                 web.map((item, index) => {
                     const classname = selectedweb.indexOf(index) === -1 ? "" : "select";
                     return <li key={index} className={classname} onClick={() => handleRight(index,"web")}> <img src={web_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul></td> </tr>
          <tr>  <td>Android</td> <td> <ul>{
                 android.map((item, index) => {
                     const classname = selectedandroid.indexOf(index) === -1 ? "" : "select";
                     return <li key={index} className={classname} onClick={() => handleRight(index,"android")}> <img src={android_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul></td> </tr>
          <tr>  <td>Backend and Databases</td> <td> <ul>{
                databases.map((item, index) => {
                    const classname = selecteddatabase.indexOf(index) === -1 ? "" : "select";
                    return <li key={index} className={classname} onClick={() => handleRight(index,"database")}> <img src={databases_icon[index]} alt='loading...'></img>  {item}</li>
                })}
          </ul></td> </tr>
          <tr>  <td>UI/UX</td> <td> <ul> {
                 uiux.map((item, index) => {
                    const classname = selecteduiux.indexOf(index) === -1 ? "" : "select";
                    return <li key={index} className={classname} onClick={() => handleRight(index,"uiux")}> <img src={uiux_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul></td> </tr>
          <tr>  <td>Core Subjects</td> <td> <ul>{
                core.map((item, index) => {
                    const classname = selectedcore.indexOf(index) === -1 ? "" : "select";
                    return <li key={index}  className={classname} onClick={() => handleRight(index,"core")}>{item}</li>
                })}
          </ul></td> </tr>
       </table>
      </div>
    </div>
    
    </div>
    <div style={{textAlign:"center"}}>
           <button class="techupdate-btn" onClick={handleSubmit}>Post Job</button>
    </div>
</div>;
}

export default JobForm;
