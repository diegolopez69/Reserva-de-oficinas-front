import React from "react";
import Grid from '@material-ui/core/Grid';
import QRCode from "react-qr-code";
import "./index.scss";

export const BookingGreen = (props) => {
  
  return (
    <div className='GeneralFloorTwo'>
      <Grid container className='GeneralSecondPart'>      
        <Grid item xs={7} className='GeneralStateOfTheRoom'>
          <div className='GeneralOfFirstLine'>
            <h3 className='TextOfFirstLine'>{props.hour}:{props.min} {props.dayName} {props.day}/{props.month}/{props.year}</h3>
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
            <br/>
            <QRCode value="google.com" /> 
          </div>
        </Grid>
      </Grid>
    

    </div>
  );
};