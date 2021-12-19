import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";

export const Availability = () => {
  const [stateOfBooking, setStateOfBooking] = useState(0)
  async function fetchData() {
    const { min, hour, dayName,  dayNumber, month, year } = Time()
    let min2 = 0;

    if( min <= 59){
      min2 = min + 1;
    }

    const { data } = await axios.get(`http://172.20.10.3:3000/links/1/${dayName}&${month}&${dayNumber}&${year}&${hour}:${min}/${dayName}&${month}&${dayNumber}&${year}&${hour}:${min2}`)


    // const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021&10:00/Fri&Dec&17&2021&24:00")
    //console.log(data.disponibilidad[0])
    if (data.disponibilidad[0] != null) {
      setStateOfBooking(1)
    } else {
      setStateOfBooking(0)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      
      fetchData();
      console.log("Se esta ejecutando");
    }, 1000);
    

    fetchData();
  }, [])

  function Time() {

    let today = new Date();

    let day = today.getDay();

    const d = new Date();
    let min = d.getMinutes();
    let hour = d.getHours();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let dayName = '';
    if (day === 0) {
      dayName = 'Sun';
    } else if (day === 1) {
      dayName = 'Mon';
    }
    else if (day === 2) {
      dayName = 'Tue';
    } else if (day === 3) {
      dayName = 'Wed';
    }
    else if (day === 4) {
      dayName = 'Thu';
    }
    else if (day === 5) {
      dayName = 'Fri';
    }
    else if (day === 6) {
      dayName = 'Sat';
    }

    if (mm === 0) {
      mm = 'Jan'
    }else if(mm = 1 ){
      mm = 'Feb'
    }else if(mm = 2 ){
      mm = 'Mar'
    }else if(mm = 3 ){
      mm = 'Apr'
    }else if(mm = 4 ){
      mm = 'May'
    }else if(mm = 5 ){
      mm = 'Jun'
    }else if(mm = 6 ){
      mm = 'Jul'
    }else if(mm = 7 ){
      mm = 'Aug'
    }else if(mm = 8 ){
      mm = 'Sep'
    }else if(mm = 9 ){
      mm = 'Oct'
    }else if(mm = 10 ){
      mm = 'Nov'
    }else if(mm = 11 ){
      mm = 'Dec'
    }
    
    // console.log("min ", min);
    // console.log("hour ", hour);
    // console.log("day ", day);
    // console.log("day ", dayName);
    // console.log("mm ", mm);
    // console.log("yy ", yyyy);
    // console.log("day ", dd);

    return {
      min: min,
      hour: hour,
      dayName : dayName,
      dayNumber: dd,
      month: mm, 
      year: yyyy
    }
  }

  

  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2 - Aula 2.1
          </h1>
        </div>
      </div>

      {stateOfBooking === 1 ? <BookingRed /> : <BookingGreen />}
    </div>
  );
};