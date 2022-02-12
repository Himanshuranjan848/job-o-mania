import React, {  useState, useEffect } from 'react';
import './techupdate.css'
import DataService from '../../firebase/firebaseOperation'

function TechUpdate({opentechform, user}) {

  const userlogged = "hs6765268";
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

  const handleChange = (ci, category) => {
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

  const submitskills = async (e)=>{
    e.preventDefault();
    // console.log(selectedandroid);
    // console.log(selectedcore);
    // console.log(selecteddatabase);
    // console.log(selecteduiux);
    // console.log(selectedweb);
    // console.log(selectedlanguage);
    await DataService.updateData("user", userlogged , {
        "language": selectedlanguage,
        "android": selectedandroid,
        "database": selecteddatabase,
        "core": selectedcore,
        "uiux": selecteduiux,
        "web": selectedweb,
    })
    opentechform(false);
}

  useEffect(()=>{
    let arr = [];
    arr = [];
    
    user?.android?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setAndroid(arr);
    
    arr = [];
    user?.web?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setWeb(arr);
    
    arr = [];
    user?.language?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setLanguage(arr);

    arr = [];
    user?.core?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setCore(arr);

    arr = [];
    user?.database?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setDatabase(arr);

    arr = [];
    user?.uiux?.arrayValue?.values?.map((element)=> arr.push(parseInt(element.integerValue)));
    setUiux(arr);

},[])


  return <div className='techupdate'>
      <div className='techupdate__languages'>
          <h1>Languages</h1>
          <ul>{
                languages.map((item, index) => {
                    const classname = selectedlanguage.indexOf(index) === -1 ? "" : "selected";
                    return <li key={index} className={`listitem ${classname}`} onClick={() => handleChange(index,"language")}> <img src={languages_icon[index]} alt='loading...'></img> {item}</li>
              })}
          </ul>

      </div>
      <div className='techupdate__web'>
      <h1>Web Technology</h1>
          <ul>{
                 web.map((item, index) => {
                     const classname = selectedweb.indexOf(index) === -1 ? "" : "selected";
                     return <li key={index} className={`listitem ${classname}`} onClick={() => handleChange(index,"web")}> <img src={web_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul>
      </div>
      <div className='techupdate__android'>
      <h1>Android</h1>
          <ul>{
                 android.map((item, index) => {
                     const classname = selectedandroid.indexOf(index) === -1 ? "" : "selected";
                     return <li key={index} className={`listitem ${classname}`} onClick={() => handleChange(index,"android")}> <img src={android_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul>
      </div>
      <div className='techupdate__backend'>
      <h1>Backend and Databases</h1>
          <ul>{
                databases.map((item, index) => {
                    const classname = selecteddatabase.indexOf(index) === -1 ? "" : "selected";
                    return <li key={index} className={`listitem ${classname}`} onClick={() => handleChange(index,"database")}> <img src={databases_icon[index]} alt='loading...'></img>  {item}</li>
                })}
          </ul>
      </div>
      <div className='techupdate__uiux'>
      <h1>UI/UX</h1>
          <ul> {
                 uiux.map((item, index) => {
                    const classname = selecteduiux.indexOf(index) === -1 ? "" : "selected";
                    return <li key={index} className={`listitem ${classname}`} onClick={() => handleChange(index,"uiux")}> <img src={uiux_icon[index]} alt='loading...'></img> {item}</li>
                 })}
          </ul>
      </div>
     
      <div className='techupdate__core'>
      <h1>Core Subjects</h1>
          <ul>{
                core.map((item, index) => {
                    const classname = selectedcore.indexOf(index) === -1 ? "" : "selected";
                    return <li key={index}  className={`listitem ${classname}`} onClick={() => handleChange(index,"core")}>{item}</li>
                })}
          </ul>
      </div>
      <div style={{textAlign:"center"}}>
           <button class="techupdate-btn" onClick={submitskills}>Update Details</button>
      </div>
  </div>;
}

export default TechUpdate;
