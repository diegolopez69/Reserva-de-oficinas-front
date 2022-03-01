import React from "react";
import { BookingMade, BookingRejected } from "../../organisms";
import "./index.scss";

export const BookingFinished = () => {
    const response = window.history.state.state;

    return (<div> {response.res === 200 ? <BookingMade /> : <BookingRejected />}</div>);
};