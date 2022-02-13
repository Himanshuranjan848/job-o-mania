import React, { useState } from 'react';
import './statscard.css'

function StatsCard({icon, data, datacount}) {
  
  console.log(data, datacount)
  const [cover, setCover] = useState(true);

  const handleClick = () => {
     setCover(!cover)
  }
 
  return <div class="wrapper">
    <div class="graph">
      <div class={`head-box ${cover ? "max" :""}`} onClick={handleClick}>{icon}</div>
      {
          data.map((item, index) =>
              <div className='bardiv'>
                   <div className={`bar ${cover ? "" :"expand"}`} style={cover ? {} :  {width:`${datacount[index]}%`, transitionDelay:`${100+50*(index)}ms`}}> </div>
                   <span className={`${cover ? "hide" : "show"}`}>{item} {datacount[index]}%</span>
              </div>
          )
      }
    </div>
  </div>;
}

export default StatsCard;
