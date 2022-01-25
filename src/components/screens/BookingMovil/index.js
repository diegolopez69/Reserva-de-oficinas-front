import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "./index.scss";



export const BookingMovil = () => {
  const hours = [
    "07:25",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
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
      body: JSON.stringify({ "reserva": { start_time: Time(hours[value])  , end_time: Time(hours[valuee]) , room_id: 1, create_by: "admin", name: "Titulo 1", description: "ejemplo1@alumnos.uneatlantico.es" } })
      
    };
    console.log(requestOptions.body);
    fetch('http://172.20.10.5:3000/links/aceptar_reserva', requestOptions)
      .then(response => response.json())
      .then(data => setValue(data.id)).catch(exception => console.error(exception));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }



  //2022-01-25T12:00:00
  function Time(time) { 
    if(!time) return ""
    const tiempo = time.split(":")
    let today = new Date();
    today.setHours(tiempo[0])
    today.setMinutes(tiempo[1])
    today.setSeconds(0);
    return `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}T${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}  `
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


            <FormControl className="FormControl">
              <InputLabel>Hora de Salida: </InputLabel>
              <Select onChange={handleChangeOut}>
              {
                hours.map((hour, index) => <MenuItem key={index} value={index}>{hour}</MenuItem>)
              }
              </Select>
            </FormControl>


            <p>Entrada: {hours[value]}</p>
          

            {Time(hours[value])}



      
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