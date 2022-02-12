import React from 'react';
import './basicdetails.css'

function BasicDetails({openbasicform, user}) {

  return <div className="basicdetails__div">
  <table>
      <tr> <td>Name</td> <td>{user?.Name?.stringValue}</td> </tr>
      <tr> <td>Gender</td> <td>{user?.Gender?.stringValue}</td></tr>
      <tr><td>College</td> <td> {user?.College?.stringValue}</td> </tr>
      <tr> <td>Degree</td> <td>{user?.Degree?.stringValue}</td> </tr>
      <tr> <td>Branch</td> <td>{user?.Branch?.stringValue}</td> </tr>
      <tr> <td>Semester</td> <td>{user?.Semester?.stringValue}</td></tr>
      <tr> <td>Current CGPA</td> <td> {parseFloat(user?.Cgpa?.stringValue)} </td> </tr>
      <tr> <td>Graduating in</td> <td> {user?.GradYear?.stringValue}</td> </tr>
      <tr> <td>Total Backlogs</td> <td> {parseInt(user?.Backlogs?.stringValue)} </td> </tr>
      <tr> <td>12th Percentage</td> <td> {parseFloat(user?.Percentage?.stringValue)}</td> </tr>
      <tr> <td colSpan={2} style={{textAlign:"center",padding:"0"}}> <button class="basicdetails-btn" onClick={() => openbasicform(true)}>Edit Details</button> </td> </tr>
  </table>
</div>;
}

export default BasicDetails;
