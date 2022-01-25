import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "./index.scss";



export const BookingMovil = () => {
  // const [open, setOpen] = React.useState(false);
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
      body: JSON.stringify({ "reserva": { start_time: "2022-01-25T12:08:00", end_time: "2022-01-25T14:08:00", room_id: 1, create_by: "admin", name: "Titulo 1", description: "ejemplo1@alumnos.uneatlantico.es" } })
    };
    console.log(requestOptions.body);
    fetch('http://172.20.10.5:3000/links/aceptar_reserva', requestOptions)
      .then(response => response.json())
      .then(data => setValue(data.id)).catch(exception => console.error(exception));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }








  function Time() {
    let today = new Date();
    let day = today.getDay();
    let min = today.getMinutes();
    let hour = today.getHours();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    //2022-01-25T12:00:00

    console.log("------------------------");
    // console.log("Today ", today);
    // console.log("min ", min);
    // console.log("hour ", hour);
    // console.log("Day Number ", dd);
    // console.log("Month ", mm);
    // console.log("Year ", yyyy);
    console.log(`${yyyy}-${mm}-${dd}T${hour}:0${min}:00`);
    console.log("newFormat ", newFormat);

    const newFormat = `${yyyy}-${mm}-${dd}T${hour}:0${min}:00`;


    let dayName = '';
    if (day === 0) {
      dayName = 'Sun';
    } else if (day === 1) {
      dayName = 'Mon';
    }
    else if (day === 2) {
      dayName = 'Tue';
    } else if (day === 3) {
      dayName = 'Wed';
    }
    else if (day === 4) {
      dayName = 'Thu';
    }
    else if (day === 5) {
      dayName = 'Fri';
    }
    else if (day === 6) {
      dayName = 'Sat';
    }


    let monthName = '';
    if (mm === '01') {
      monthName = 'Jan'
    } else if (mm === '02') {
      monthName = 'Feb'
    } else if (mm === '03') {
      monthName = 'Mar'
    } else if (mm === '04') {
      monthName = 'Apr'
    } else if (mm === '05') {
      monthName = 'May'
    } else if (mm === '06') {
      monthName = 'Jun'
    } else if (mm === '07') {
      monthName = 'Jul'
    } else if (mm === '08') {
      monthName = 'Aug'
    } else if (mm === '09') {
      monthName = 'Sep'
    } else if (mm === '10') {
      monthName = 'Oct'
    } else if (mm === '11') {
      monthName = 'Nov'
    } else if (mm === '12') {
      monthName = 'Dec'
    }




    let min2 = 0;
    min2 = min + 1; //No es necesario validar el 60 porque pone 0, eso resuelve el error

    return {
      min: min,
      min2: min2,
      hour: hour,
      dayName: dayName,
      monthName: monthName,
      dayNumber: dd,
      month: mm,
      year: yyyy
    }
  }






























  return (
    <div className='MainScreenBookingMovile'>
      <div className="GeneralHeaderOfBookingMovil">
        <p className="TextOfHeader">Reserva</p>
      </div>
      {/* {Time()} */}
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
                <MenuItem value={"07:00:00"}>07:00</MenuItem>
                <MenuItem value={"08:00:00"}>08:00</MenuItem>
                <MenuItem value={"09:00:00"}>09:00</MenuItem>
                <MenuItem value={"10:00:00"}>10:00</MenuItem>
                <MenuItem value={"11:00:00"}>11:00</MenuItem>
                <MenuItem value={"12:00:00"}>12:00</MenuItem>
                <MenuItem value={"13:00:00"}>13:00</MenuItem>
                <MenuItem value={"14:00:00"}>14:00</MenuItem>
                <MenuItem value={"15:00:00"}>15:00</MenuItem>
                <MenuItem value={"16:00:00"}>16:00</MenuItem>
                <MenuItem value={"17:00:00"}>17:00</MenuItem>
                <MenuItem value={"18:00:00"}>18:00</MenuItem>
                <MenuItem value={"19:00:00"}>19:00</MenuItem>
                <MenuItem value={"20:00:00"}>20:00</MenuItem>
                <MenuItem value={"21:00:00"}>21:00</MenuItem>
              </Select>
            </FormControl>

            <p>Entrada: {value}</p>
          </form>

          <form className="LabelForm">
            <FormControl className="FormControl">
              <InputLabel>Hora de salida: </InputLabel>
              <Select onChange={handleChangeOut}>
                <MenuItem value={"07:00:00"}>07:00</MenuItem>
                <MenuItem value={"08:00:00"}>08:00</MenuItem>
                <MenuItem value={"09:00:00"}>09:00</MenuItem>
                <MenuItem value={"10:00:00"}>10:00</MenuItem>
                <MenuItem value={"11:00:00"}>11:00</MenuItem>
                <MenuItem value={"12:00:00"}>12:00</MenuItem>
                <MenuItem value={"13:00:00"}>13:00</MenuItem>
                <MenuItem value={"14:00:00"}>14:00</MenuItem>
                <MenuItem value={"15:00:00"}>15:00</MenuItem>
                <MenuItem value={"16:00:00"}>16:00</MenuItem>
                <MenuItem value={"17:00:00"}>17:00</MenuItem>
                <MenuItem value={"18:00:00"}>18:00</MenuItem>
                <MenuItem value={"19:00:00"}>19:00</MenuItem>
                <MenuItem value={"20:00:00"}>20:00</MenuItem>
                <MenuItem value={"21:00:00"}>21:00</MenuItem>
              </Select>
            </FormControl>
            <p>Salida: {valuee}</p>
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