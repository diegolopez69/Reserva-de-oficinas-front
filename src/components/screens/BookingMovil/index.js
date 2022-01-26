import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "./index.scss";

export const BookingMovil = () => {
  const hours = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ]

  const [value, setValue] = useState("");
  const [valuee, setValuee] = useState("");
  const handleChange = e => setValue(e.target.value);
  const handleChangeOut = e => setValuee(e.target.value);


  const PostMethod = () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ start_time: value, end_time: valuee, room_id:1, create_by:"admin", name:"Titulo 1", description:"ejemplo1@alumnos.uneatlantico.es" })
      body: JSON.stringify({ "reserva": { start_time: Time(hours[value]), end_time: Time(hours[valuee]), room_id: 1, create_by: "admin", name: "Titulo 1", description: "ejemplo1@alumnos.uneatlantico.es" } })

    };
    console.log(requestOptions.body);
    fetch('http://172.20.10.5:3000/links/aceptar_reserva', requestOptions)
      .then(response => response.json())
      .then(data => setValue(data.id)).catch(exception => console.error(exception));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }



  //2022-01-25T12:00:00
  function Time(time) {
    if (!time) return ""
    const tiempo = time.split(":")
    let today = new Date();
    today.setHours(tiempo[0])
    today.setMinutes(tiempo[1])
    today.setSeconds(0);
    let month = today.getMonth() + 1
    let date = today.getDate()
    let hour = today.getHours()
    let minute = today.getMinutes()


    if (month === 1) {
      month = `0` + 1
    } else if (month === 2) {
      month = `0` + 2
    } else if (month === 3) {
      month = `0` + 3
    } else if (month === 4) {
      month = `0` + 4
    } else if (month === 5) {
      month = `0` + 5
    } else if (month === 6) {
      month = `0` + 6
    } else if (month === 7) {
      month = `0` + 7
    } else if (month === 8) {
      month = `0` + 8
    } else if (month === 9) {
      month = `0` + 9
    } else if (month === 10) {
      month = 10
    } else if (month === 11) {
      month = 11
    } else if (month === 12) {
      month = 12
    }


    if (date === 1) {
      date = `0` + 1
    } else if (date === 2) {
      date = `0` + 2
    } else if (date === 3) {
      date = `0` + 3
    } else if (date === 4) {
      date = `0` + 4
    } else if (date === 5) {
      date = `0` + 5
    } else if (date === 6) {
      date = `0` + 6
    } else if (date === 7) {
      date = `0` + 7
    } else if (date === 8) {
      date = `0` + 8
    } else if (date === 9) {
      date = `0` + 9
    }


    if (hour === 7) {
      hour = `0` + 7
    } else if (hour === 8) {
      hour = `0` + 8
    } else if (hour === 9) {
      hour = `0` + 9
    }


    if (minute === 0) {
      minute = `00`
    }

    return `${today.getFullYear()}-${month}-${date}T${hour}:${minute}:0${today.getSeconds()}  `
  }




  return (
    <div className='MainScreenBookingMovile'>
      <div className="GeneralHeaderOfBookingMovil">
        <p className="TextOfHeader">Reserva</p>
      </div>
      <div className="GeneralFormOfBookingMovil">

        <div className="FormName">
          <p className="TextOfNameOnForm">Diego López</p>
        </div>

        <div className="InsideForm">
          <form className="LabelForm">
            <label>Aula: </label>
            <label>2.1</label>
          </form>

          <form className="LabelForm">
            <label>Correo: </label>
            <label>diego.lopez@alumnos.uneatlantico.es</label>
          </form>

          <form className="LabelForm">


            <FormControl className="FormControl">
              <InputLabel>Hora de entrada: </InputLabel>
              <Select onChange={handleChange}>
                {
                  hours.map((hour, index) => <MenuItem key={index} value={index}>{hour}</MenuItem>)
                }
              </Select>
            </FormControl>
            <p>Entrada: {hours[value]}</p>
            {Time(hours[value])}

          </form>



          <form className="LabelForm">
            <FormControl className="FormControl">
              <InputLabel>Hora de Salida: </InputLabel>
              <Select onChange={handleChangeOut}>
                {
                  hours.map((hour, index) => <MenuItem key={index} value={index}>{hour}</MenuItem>)
                }
              </Select>
            </FormControl>


            <p>Salida: {hours[valuee]}</p>


            {Time(hours[valuee])}




          </form>






        </div>


        <div className="BtnToBooking">
          <Link to="/bookingFinished">
            <Button className="BtnReservar" onClick={() => {
              PostMethod();
            }}>Reservar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};