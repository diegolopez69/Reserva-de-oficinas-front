import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import moment from "moment";
import "./index.scss";

export const BookingRed = (props) => {
  // const { REACT_APP_API_URL } = process.env;
  const [dataInformation, setData] = useState({
    create_by: "",
    name: "",
    end_time: ""
  })

  async function fetchData() {
    //console.log(`http://172.20.10.5:3000/links/who/1/${dayLetter}&${month}&${day}&${year}&${hour}:20/${dayLetter}&${month}&${day}&${year}&${newHour}:05`);
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/who/1`)
    Time()
    // console.log(data.disponibilidad);
    // console.log(data.disponibilidad.create_by);
    // console.log(data.disponibilidad.name);
    //console.log("end_time",data.disponibilidad.end_time);
    //let fixedHour = (data.disponibilidad.end_time * 1000) - 3599000

    let fixedHour = (data.disponibilidad.end_time * 1000) - 7140000 //El 7140000 es restar 119 minutos, el formato son milisegundos.
    let newEndTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(fixedHour)
    let payload = {
      create_by: data.disponibilidad.create_by,
      name: data.disponibilidad.name,
      end_time: newEndTime
    }

    setData(payload)
  }

  useEffect(() => {
    fetchData();
  }, [])

  function Time() {
    let dayLetter = moment().format("ddd");
    let month = moment().format("MMM");
    let day = moment().format("D");
    let year = moment().format("YYYY");
    let hour = moment().format("kk");
    let minute = moment().format("mm");
    let newHour = moment().add(1, 'hour').format('kk')

    return {
      dayLetter: dayLetter,
      month: month,
      day: day,
      year: year,
      hour: hour,
      minute: minute,
      newHour: newHour
    }
  }

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
            <p className="BaseText">Lo sentimos, en este momento la sala de reuniones esta siendo utilizada.</p>
            <p className="TextWithInformation"> Reservada por: <b>{dataInformation.create_by}</b> </p>
            <p className="TextWithInformation"> Motivo: <b>{dataInformation.name}</b> </p>
            <p className="TextWithInformation"> Hora de finalización: <b>{dataInformation.end_time}</b></p>
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};  