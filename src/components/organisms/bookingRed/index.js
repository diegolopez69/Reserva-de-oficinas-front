import React from "react";
import Grid from '@material-ui/core/Grid';
import QRCode from "react-qr-code";
import "./index.scss";

export const BookingRed = (props) => {

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
            {/* <p >Descripción :</p> <p>props.description</p> <br/>
            <p >Nombre :</p> <p>props.name</p><br/>
            <p >Hora de inicio :</p> <p>props.start</p><br/>
            <p >Hora de finalización :</p> <p>props.end</p> */}
            <p>
              Lo sentimos, en este momento la sala de reuniones esta siendo utilizada, vuelve a intentarlo en media hora.
            </p>
            
            <br/>
            <QRCode value="google.com" />
            
          </div>
        </Grid>
      </Grid>


    </div>
  );
};