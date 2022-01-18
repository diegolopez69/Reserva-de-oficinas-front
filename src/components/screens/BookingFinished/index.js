import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./index.scss";


export const BookingFinished = () => {
    return (
        <div className='MainScreenBookingFinished'>
            <CheckCircleIcon className="IconCheck"/>
            <p className="TextOfBookingFinished">Reserva terminada!</p>
        </div>
    );
};

