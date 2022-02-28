import React from "react";
import { BookingMade, BookingRejected } from "../../organisms";
import "./index.scss";

export const BookingFinished = () => {
    const response = window.history.state.state;

    
    //return (<div><h1>It works</h1></div>);

    return (<div> {response.res === 200 ? <BookingMade /> : <BookingRejected />}</div>);
};