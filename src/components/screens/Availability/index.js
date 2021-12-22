import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";

export const Availability = () => {
  const { min, hour, dayName, day, dayNumber, monthName, month, year } = Time()
  const [stateOfBooking, setStateOfBooking] = useState(0)
  async function fetchData() {
    // const { min, hour, dayName, dayNumber, monthName, year } = Time()
    let min2 = 0;
    if (min <= 59) {
      min2 = min + 1;
    }


    const { data } = await axios.get(`localhost:3000/links/1/${dayName}&${monthName}&${dayNumber}&${year}&${hour}:${min}/${dayName}&${monthName}&${dayNumber}&${year}&${hour}:${min2}`)
    // const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021&10:00/Fri&Dec&17&2021&24:00")
    console.log('---> ', data.disponibilidad[0]);
    if (data.disponibilidad[0] != null) {
      setStateOfBooking(1)
    } else {
      setStateOfBooking(0)
    }
  }
  useEffect(() => {

    const timer = setInterval(() => {
      fetchData();
      console.log("Paso el timer");
    }, 3000);        //1800000 = 30 mins
    fetchData();
  }, [])

  function Time() {
    let today = new Date();
    const d = new Date();
    let day = today.getDay();
    let min = d.getMinutes();
    let hour = d.getHours();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
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


    let monthName = '';
    if (mm === '1') {
      monthName = 'Jan'
    } else if (mm === '2') {
      monthName = 'Feb'
    } else if (mm === '3') {
      monthName = 'Mar'
    } else if (mm === '4') {
      monthName = 'Apr'
    } else if (mm === '5') {
      monthName = 'May'
    } else if (mm === '6') {
      monthName = 'Jun'
    } else if (mm === '7') {
      monthName = 'Jul'
    } else if (mm === '8') {
      monthName = 'Aug'
    } else if (mm === '9') {
      monthName = 'Sep'
    } else if (mm === '10') {
      monthName = 'Oct'
    } else if (mm === '11') {
      monthName = 'Nov'
    } else if (mm === '12') {
      monthName = 'Dec'
    }

    console.log("------------------------");
    // console.log("min ", min);
    // console.log("hour ", hour);
    // console.log("dayName ", dayName);
    // console.log("monthName ", monthName);
    // console.log("day ", dd);
    // console.log("month ", mm);
    // console.log("yy ", yyyy);


    return {
      min: min,
      hour: hour,
      dayName: dayName,
      monthName: monthName,
      dayNumber: dd,
      day: dd,
      month: mm,
      year: yyyy
    }
  }

  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <Link to="/floorTwo">
          <Button className='BtnToGoBack'>
            <ArrowBackIosIcon className='IconToGoBack' />
          </Button>
        </Link>
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2 - Aula 2.1
          </h1>
        </div>
      </div>

      {/* {stateOfBooking === 1 ? <BookingRed /> : <BookingGreen />} */}
      {stateOfBooking === 1 ? <BookingRed min={min} hour={hour} dayName={dayName} day={day} month={month} year={year} /> : <BookingGreen min={min} hour={hour} dayName={dayName} day={day} month={month} year={year} />}
    </div>
  );
};