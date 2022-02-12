import React from 'react';
import './techdetails.css'

function TechDetails({opentechform,user}) {

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

    let lang = [];
    user?.language?.arrayValue?.values?.map((element)=> lang.push(element.integerValue));
    let wb = [];
    user?.web?.arrayValue?.values?.map((element)=> wb.push(element.integerValue));
    let and = [];
    user?.android?.arrayValue?.values?.map((element)=> and.push(element.integerValue));
    let cr = [];
    user?.core?.arrayValue?.values?.map((element)=> cr.push(element.integerValue));
    let db = [];
    user?.database?.arrayValue?.values?.map((element)=> db.push(element.integerValue));
    let ui = [];
    user?.uiux?.arrayValue?.values?.map((element)=> ui.push(element.integerValue));

    return <div className='techprofile'>
    <div className='techprofile__languages'>
        <h1>Languages</h1>
        <ul>{
              lang.map((item, index) => {
                  return <li key={index}> <img src={languages_icon[item]} alt='loading...'></img> {languages[item]}</li>
            })}
        </ul>

    </div>
    <div className='techprofile__web'>
    <h1>Web Technology</h1>
        <ul>
            {wb.map((item, index) => <li key={index}> <img src={web_icon[item]} alt='loading...'></img> {web[item]}</li>)}
        </ul>
    </div>
    <div className='techprofile__android'>
    <h1>Android</h1>
        <ul>
            {and.map((item, index) => <li key={index}> <img src={android_icon[item]} alt='loading...'></img> {android[item]}</li>)}
        </ul>
    </div>
    <div className='techprofile__backend'>
    <h1>Backend and Databases</h1>
        <ul>
            {db.map((item, index) => <li key={index}> <img src={databases_icon[item]} alt='loading...'></img>  {databases[item]}</li>)}
        </ul>
    </div>
    <div className='techprofile__uiux'>
    <h1>UI/UX</h1>
        <ul>
            {ui.map((item, index) => <li key={index}> <img src={uiux_icon[item]} alt='loading...'></img> {uiux[item]}</li>)}
        </ul>
    </div>
   
    <div className='techprofile__core'>
    <h1>Core Subjects</h1>
        <ul>
            {cr.map((item, index) => <li key={index}>{core[item]}</li>)}
        </ul>
    </div>
    <div style={{textAlign:"center",display:"table-cell",textAlign:"center"}}> <button class="techprofile-btn" onClick={() => opentechform(true)}>Edit Details</button></div>
</div>;
}

export default TechDetails;
