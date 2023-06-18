import React from "react";
import { Chart } from "react-google-charts";
import { WiDayCloudy, WiMoonAltFull } from "react-icons/wi";

export const data = [
  ["Year", "Temparature", "Precitation"],
  ["7am", 1000, 400],
  ["10am",1170, 460],
  ["1am",660, 1120],
  ["4am", 1030, 540],
  ["7am", 1000, 400],
  ["10am", 1170, 460],
  ["1am", 660, 1120],
  ["4am", 1030, 540],
];

export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.3, 0.6],
  },
  colors: ["#FFF000", "#000000"], 
  backgroundColor: "#000000",

};

export function Temparature() {
  return (
    <>
    <div className="custom-content">
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      className="style-head"
      options={options}
    />
     <div className=" d-flex justify-content-between w-75 m-auto">
      <div className="styles">
        <h5>Tue</h5>
        <h1><WiDayCloudy style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>43.32</h4>
        
      </div>
      <div className="styles">
        <h5>Wen</h5>
        <h1><WiDayCloudy style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>44.32</h4>
      </div>
      <div className="styles" >
        <h5>Thu</h5>
        <h1><WiDayCloudy style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>44.32</h4>
      </div>
      <div className="styles">
        <h5>Fri</h5>
        <h1><WiMoonAltFull style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>45.32</h4>
      </div>
      <div className="styles">
        <h5>Sat</h5>
        <h1><WiMoonAltFull style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>45.32</h4>
      </div>
      <div className="styles">
        <h5>Sun</h5>
        <h1><WiDayCloudy style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>44.32</h4>
      </div>
      <div className="styles">
        <h5>Mon</h5>
        <h1><WiMoonAltFull style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>43.32</h4>
      </div>
      <div className="styles">
        <h5>Tue</h5>
        <h1><WiMoonAltFull style={{fontSize:"50px",color:"yellow"}}/></h1>
        <h4>42s.32</h4>
      </div>
    </div>
    </div>
   
    </>
  );
}
