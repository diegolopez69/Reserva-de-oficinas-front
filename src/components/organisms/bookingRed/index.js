import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import QRCode from "react-qr-code";
import axios from "axios";
import moment from "moment";
import "./index.scss";

export const BookingRed = (props) => {
  const [dataInformation, setData] = useState({
    create_by: "",
    name: "",
    end_time: ""
  })

  const { dayLetter, month, day, year, hour, newHour} = Time()
  // const { } = fetchData()


  async function fetchData() {      
    //console.log(`http://172.20.10.5:3000/links/who/1/${dayLetter}&${month}&${day}&${year}&${hour}:20/${dayLetter}&${month}&${day}&${year}&${newHour}:05`);
    const { data } = await axios.get(`http://172.27.18.169:3000/links/who/1`)
    Time()
    console.log(data.disponibilidad);
    console.log(data.disponibilidad.create_by);
    console.log(data.disponibilidad.name);
    console.log(data.disponibilidad.end_time);

    let normalTime = moment(data.disponibilidad.end_time).format("kk:mm")
    


    // let newEnd_time = data.disponibilidad.end_time * 1000;
    // const finishTime = new Date(newEnd_time);

    // const timestampObj = moment.unix(newEnd_time);
    // const result = timestampObj.format("HH:mm:ss")

    //console.log("result", result);
    let payload = {
      create_by: data.disponibilidad.create_by,
      name: data.disponibilidad.name,
      //end_time: data.disponibilidad.end_time
      end_time: normalTime
    }

    setData(payload)
  }

  useEffect(() => {
    fetchData();
  }, [])

  function Time() {
    let now = moment().format("ddd, MMM D YYYY, h:mm"); // Fri, Feb 14 2010, 3:25"

    let dayLetter = moment().format("ddd");
    let month = moment().format("MMM");
    let day = moment().format("D");
    let year = moment().format("YYYY");
    let hour = moment().format("kk");
    let minute = moment().format("mm");
    let newHour = moment().add(1, 'hour').format('kk')

    // console.log(now);
    // console.log(dayLetter);
    // console.log(month);
    // console.log(day);
    // console.log(year);
    // console.log(hour);
    // console.log(minute);
    // console.log(newHour);
    

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
            {/* <p>
              Lo sentimos, en este momento la sala de reuniones esta siendo utilizada por {dataInformation.create_by}
              , vuelve a intentarlo en media hora.
            </p> */}
            <p>Lo sentimos, en este momento la sala de reuniones esta siendo utilizada.</p>
            <p>
              Reservada por: {dataInformation.create_by}<br />
              Motivo: {dataInformation.name} <br />
              Hora de finalización: {dataInformation.end_time}<br />
            </p>

            <br />
            <QRCode value="http://172.27.65.240:1377/bookingMovil" />
          </div>
        </Grid>
      </Grid>


    </div>
  );
};  