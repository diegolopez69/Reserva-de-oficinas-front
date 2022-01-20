import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { Select, MenuIcon, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "./index.scss";



export const BookingMovil = () => {
  // const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");
  const [valuee, setValuee] = useState("");

  const history = useHistory();

  const handleChange = e => setValue(e.target.value);
  const handleChangeOut = e => setValuee(e.target.value);



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
            <Button className="BtnReservar">Reservar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};