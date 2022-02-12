import React, { useState } from "react";
import './basicupdate.css'
import { TextField, MenuItem } from "@mui/material";
import DataService from '../../firebase/firebaseOperation'

function BasicUpdate({openbasicform,user}) {

   const userlogged = "hs6765268"; 
   const [gender, setGender] = useState(user?.Gender?.stringValue);
   const [name, setName] = useState(user?.Name?.stringValue);
   const [college, setCollege] = useState(user?.College?.stringValue);
   const [degree, setDegree] = useState(user?.Degree?.stringValue);
   const [branch, setBranch] = useState(user?.Branch?.stringValue);
   const [semester, setSemester] = useState(user?.Semester?.stringValue);
   const [cgpa, setCgpa] = useState(parseFloat(user?.Cgpa?.stringValue));
   const [year, setYear] = useState(user?.GradYear?.stringValue);
   const [backlog, setBacklog] = useState(parseInt(user?.Backlogs?.stringValue));
   const [marks, setMarks] = useState(parseFloat(user?.Percentage?.stringValue));

    const handleChange = (event, category) => {
        if(category === "gender") setGender(event.target.value);
        else if(category === "name") setName(event.target.value);
        else if(category === "college") setCollege(event.target.value);
        else if(category === "degree") setDegree(event.target.value);
        else if(category === "branch") setBranch(event.target.value);
        else if(category === "semester") setSemester(event.target.value);
        else if(category === "cgpa") setCgpa(event.target.value);
        else if(category === "year") setYear(event.target.value);
        else if(category === "backlog")setBacklog(event.target.value);
        else if(category === "marks") setMarks(event.target.value);
    }

    const submitform = async (e)=>{
      e.preventDefault();
      
      await DataService.updateData("user",userlogged ,{
         "Name" : name,
         "Gender":gender,
         "College": college,
         "Degree" : degree,
         "Branch":branch,
         "Semester":semester,
         "Percentage": ""+marks,
         "Cgpa": ""+cgpa,
         "GradYear":year,
         "Backlogs":""+backlog,

      } );
      //console.log("done");
      openbasicform(false);
 }
  
    

  return (
    <div className="basicupdate__div">
       <table>
            <tr> <td> Name</td> <td><TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => handleChange(e,"name")} style={{minWidth:"50%"}}> {name}</TextField></td> </tr>
            <tr> <td>Gender</td> <td> <TextField  select label="Select Gender" value={gender} onChange={(e) => handleChange(e,"gender")}variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="Male">Male</MenuItem>
                  <MenuItem key={1} value="Female">Female</MenuItem>
               </TextField>
               </td>
             </tr>
           <tr><td>College</td> <td><TextField select label="Select College" value={college} onChange={(e) => handleChange(e,"college")} variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="National Institute of Technology Patna">National Institute of Technology Patna</MenuItem>
                  <MenuItem key={1} value="National Institute of Technology Calicut">National Institute of Technology Calicut</MenuItem>
               </TextField>
                </td>
             </tr>
           <tr> <td>Degree</td> <td><TextField select label="Select Degree" value={degree} onChange={(e) => handleChange(e,"degree")} variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="B.Tech">B.Tech</MenuItem>
                  <MenuItem key={1} value="M.Tech">M.Tech</MenuItem>
               </TextField>
               </td> 
            </tr>
           <tr> <td>Branch</td> <td><TextField select label="Select Degree" value={branch} onChange={(e) => handleChange(e,"branch")} variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="Computer Science and Engineering">Computer Science and Engineering</MenuItem>
                  <MenuItem key={1} value="Electronics and Communication Engineering">Electronics and Communication Engineering</MenuItem>
                  <MenuItem key={2} value="Electrical Engineering">Electrical Engineering</MenuItem>
               </TextField>
               </td> 
            </tr>
           <tr> <td>Semester</td> <td><TextField select label="Select Semester" value={semester} onChange={(e) => handleChange(e,"semester")} variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="1st">1st</MenuItem>
                  <MenuItem key={1} value="2nd">2nd</MenuItem>
                  <MenuItem key={2} value="3rd">3rd</MenuItem>
                  <MenuItem key={3} value="4th">4th</MenuItem>
                  <MenuItem key={4} value="5th">5th</MenuItem>
                  <MenuItem key={5} value="6th">6th</MenuItem>
                  <MenuItem key={6} value="7th">7th</MenuItem>
                  <MenuItem key={7} value="8th">8th</MenuItem>
               </TextField>
               </td>
            </tr>
           <tr> <td>Current CGPA</td> <td> <TextField variant="standard" label="Enter CGPA" type="number" value={cgpa} onChange={(e) => handleChange(e,"cgpa")}/> </td> </tr>
           <tr> <td>Graduating in</td> <td> <TextField select label="Graduation Year" value={year} onChange={(e) => handleChange(e,"year")} variant="standard" style={{minWidth:"50%"}}>
                  <MenuItem key={0} value="2022">2022</MenuItem>
                  <MenuItem key={1} value="2023">2023</MenuItem>
                  <MenuItem key={2} value="2024">2024</MenuItem>
                  <MenuItem key={3} value="2025">2025</MenuItem>
                  <MenuItem key={4} value="2026">2026</MenuItem>
               </TextField>
               </td> 
            </tr>
           <tr> <td>Total Backlogs</td> <td> <TextField variant="standard" label="Backlogs" type="number" value={backlog} onChange={(e) => handleChange(e,"backlog")}/> </td> </tr>
           <tr> <td>12th Percentage</td> <td> <TextField variant="standard" label="12th Percentage" type="number" value={marks} onChange={(e) => handleChange(e,"marks")}/> </td> </tr>
           <tr> <td colSpan={2} style={{textAlign:"center",padding:"0"}}> <button class="basicupdate-btn" onClick={submitform}>Update Details</button> </td> </tr>
       </table>
    </div>
  );
}

export default BasicUpdate;
