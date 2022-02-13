import React, {useState,useEffect} from 'react';
import './jobpost.css'
import DataService from "../../firebase/firebaseOperation"

function JobPost({jobid,index}) {

  const [job, setjob] = useState({});

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
    
  const fetchjob = async ()=>{
    const retuser = await DataService.getData("jobs", jobid);
    const val1 = (await retuser?._document?.data?.value?.mapValue?.fields);
    setjob(val1);
  }

  useEffect(()=>{
    fetchjob();
},[])

  return  <div className='post' key={index}>
             <a href={job?.link?.stringValue} target="_blank"></a>
             <table>
               <tr style={{backgroundColor:"#EEEEEE",borderBottom:"1px solid gray"}}> <td colSpan={2}>Deadline : {job?.date?.stringValue}  <i class="fas fa-trash"></i> <i class="fas fa-edit"></i> </td> </tr>
               <tr> <td>Category</td> <td>{job?.category?.stringValue} </td> </tr>
               <tr> <td>Location</td> <td>{job?.location?.stringValue}</td> </tr>
               <tr> <td>Salary</td> <td>{job?.salary?.stringValue}</td> </tr>
               <tr> <td>Work Experience</td> <td>{job?.experience?.stringValue}</td> </tr>
               {/* <tr> <td>College</td> <td>{job?.college?.stringValue}</td> </tr> */}
               {/* <tr style={{padding:"3rem"}}> <td>Job Link</td> <td>{job?.link?.stringValue}</td> </tr> */}
             </table>
             <p style={{paddingLeft:"1rem"}}>Skills Required</p>
             <ul style={{paddingLeft:"1rem"}}>
                  {job?.language?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}> <img src={languages_icon[skill.integerValue]} alt='loading...'></img> {languages[skill.integerValue]}</li>)}
                  {job?.web?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}> <img src={web_icon[skill.integerValue]} alt='loading...'></img> { web[skill.integerValue]}</li>)}
                  {job?.database?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}> <img src={databases_icon[skill.integerValue]} alt='loading...'></img> { databases[skill.integerValue]}</li>)}
                  {job?.andriod?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}> <img src={ android_icon[skill.integerValue]} alt='loading...'></img> {android[skill.integerValue]}</li>)}
                  
                  {job?.uiux?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}> <img src={ uiux_icon[skill.integerValue]} alt='loading...'></img> {uiux[skill.integerValue]}</li>)}
                  {job?.core?.arrayValue?.values?.map((skill) => <li key={skill.integerValue}>  {core[skill.integerValue]}</li>)}
             </ul> 
         </div>;
}

export default JobPost;
