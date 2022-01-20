import React from "react";
import logoUneat from "../../../resources/logoUEA.png";
import { LoginGoogle } from "../../organisms";
import "./index.scss";

export const BookingHome = () => {
    return (
        <div className='MainScreenBookingFinished'>
            <img src={logoUneat} className="ImgLogoMovil"></img>
            <LoginGoogle/>
        </div>
    );
};



