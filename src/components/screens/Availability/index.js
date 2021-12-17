import React, {useState, useEffect} from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
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






      
      <Grid container className='GeneralSecondPart'>      
        <Grid item xs={7} className='GeneralStateOfTheRoom'>
          <div className='GeneralOfFirstLine'>
            <h3 className='TextOfFirstLine'>12:11 Viernes 17/12/2021</h3>
          </div>
          <div className='GeneralOfSecondLine'>
            <p className='TextOfSecondLine'>LIBRE</p>
          </div>
        </Grid>
        <Grid item xs={5} className='GeneralBooking'>
          <div className='TitleOfBooking'>          
            <h3>Hoy</h3>
          </div>
          <div className='BookingPart'>
            <p className='TextOfBooking'>¡Reserva ahora mismo!</p>
          </div>
        </Grid>
      </Grid>
    



      

    </div>
  );
};


