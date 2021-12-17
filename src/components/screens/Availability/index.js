import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";



// Dia            
// Mes            check
// Dia en fecha   check
// Año            check


export const Availability = () => {
  const [stateOfBooking, setStateOfBooking] = useState(0)
  async function fetchData() {
    // const {  } = useTime()
    const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021&07:00/Fri&Dec&17&2021&24:00")
    //console.log(data.disponibilidad[0])
    if (data.disponibilidad[0] != null) {
      setStateOfBooking(1)
    } else {
      setStateOfBooking(0)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  // function useTime() {
    
  //   var today = new Date();

  //   let day = today.getDay();

  //   var dd = String(today.getDate()).padStart(2, '0');
  //   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   var yyyy = today.getFullYear();

  //   let dayName = '';
  //   if (day === 1) {
  //       dayName = 'Sun';
  //   } else if (day === 2) {
  //      dayName = 'Mon';
  //   }
  //   else if (day === 3) {
  //      dayName = 'Tue';
  //   } else if (day === 4) {
  //      dayName = 'Wed';
  //   }
  //   else if (day === 5) {
  //      dayName = 'Thu';
  //   }
  //   else if (day === 6) {
  //      dayName = 'Fri';
  //   }
  //   else if (day === 7) {
  //      dayName = 'Sat';
  //   }
  //   console.log("day ", dayName);
  //   console.log("mm ", mm);
  //   console.log("yy ", yyyy);
  //   console.log("day ", dd);

  //   return {
  //     dayName : dayName,
  //     month: mm, 
  //     year: yyyy, 
  //     dayNumber: dd
  //   }

  // }

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
      {/* {useTime()} */}
      {stateOfBooking === 1 ? <BookingRed /> : <BookingGreen />}
    </div>
  );
};


