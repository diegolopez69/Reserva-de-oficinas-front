import React from "react";
import { BookingMade, BookingRejected } from "../../organisms";
import "./index.scss";


export const BookingFinished = () => {
    return (
        // <p><label>{localStorage.getItem("response")}</label></p>
        <BookingMade/>
        //<BookingRejected/>
    );
};