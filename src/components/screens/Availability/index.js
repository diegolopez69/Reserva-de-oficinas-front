import React, { useEffect } from "react";
import axios from "axios";
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";

export const Availability = () => {
  let stateOfBooking = 0;
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021/Fri&Dec&17&2021&24:00")
      if (data.disponibilidad[0] != null) {
        let stateOfBooking = 1;        
        console.log('respuesta ', data.disponibilidad[0]);
        console.log('primero ', stateOfBooking); 
      }
    }
    fetchData();
  }, [])

  const stateFunction = (props) => {
    console.log('segundo ', stateOfBooking);
    if (stateOfBooking === 1) {
      return <BookingRed />  
    }else if (stateOfBooking === 2 ){
      return <BookingGreen /> 
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
      {stateFunction()}
    </div>
  );
};


