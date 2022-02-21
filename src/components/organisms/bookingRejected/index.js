import React from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import "./index.scss";


export const BookingRejected = () => {
    return (
        <div className='MainScreenBookingFinished'>
            <div className='FinishedBooking'>
                <ErrorOutlineIcon className="IconCheck" />
                <p className="TextOfBookingFinished">Algo ocurrió mal</p>
                <p className="LittleText">No se pudo realizar la reserva, pues la sala ya esta ocupada.</p>
            </div>
        </div>
    );
};