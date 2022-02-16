import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import QRCode from "react-qr-code";
import axios from "axios";
import "./index.scss";

export const BookingRed = (props) => {

  async function fetchData() {
    const { data } = await axios.get(`http://172.27.65.240:3000/links/who/1/Fri&Feb&16&2022&07:49/Fri&Feb&16&2022&22:50`)

    console.log(data.disponibilidad);
    console.log(data.disponibilidad.create_by);
    console.log(data.disponibilidad.name);
    console.log(data.disponibilidad.end_time);
    
    // if (data.disponibilidad[0] != null) {
    //   setStateOfBooking(1)
    // } else {
    //   setStateOfBooking(0)
    // }
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div className='GeneralFloorTwo'>
      <Grid container className='GeneralSecondPart'>
        <Grid item xs={7} className='GeneralStateOfTheRoomTwo'>
          <div className='GeneralOfFirstLine'>
          <h3 className='TextOfFirstLine'>{props.hour}:{props.min} {props.dayName} {props.day}/{props.month}/{props.year}</h3>
          </div>
          <div className='GeneralOfSecondLine'>
            <p className='TextOfSecondLine'>OCUPADA</p>
          </div>
        </Grid>
        <Grid item xs={5} className='GeneralBooking'>
          <div className='TitleOfBooking'>
            <h3>Hoy</h3>
          </div>
          <div className='BookingPart'>
            <p>
              Lo sentimos, en este momento la sala de reuniones esta siendo utilizada, vuelve a intentarlo en media hora.
            </p>
            
            <br/>
            <QRCode value="http://172.27.65.240:1377/bookingMovil" />
          </div>
        </Grid>
      </Grid>


    </div>
  );
};