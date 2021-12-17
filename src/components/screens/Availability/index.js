import React, {useState, useEffect} from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";



export const Availability = () => {

    useEffect(() => {
      async function fetchData() {
        let stateOfBooking = 0;
        const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021/Fri&Dec&17&2021&24:00")
        if( data.disponibilidad[0] != null)
        console.log('respuesta ', data.disponibilidad[0]);
        stateOfBooking = 1;
      }
      fetchData();
    }, [])
  
  
  



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




    <BookingGreen/>
    {/* <BookingRed/> */}

      
    



      

    </div>
  );
};


