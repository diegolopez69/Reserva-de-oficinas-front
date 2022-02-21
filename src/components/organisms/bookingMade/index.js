import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import "./index.scss";


export const BookingMade = () => {
    return (
        <div className='MainScreenBookingFinished'>
            <div className='FinishedBooking'>
                <CheckCircleIcon className="IconCheck" />
                <p className="TextOfBookingFinished">Reserva realizada</p>
            </div>
        </div>
    );
};