import React from "react";
import Grid from '@material-ui/core/Grid';
import "./index.scss";

export const BookingGreen = () => {
  
  return (
    <div className='GeneralFloorTwo'>
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