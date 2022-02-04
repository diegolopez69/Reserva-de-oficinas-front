import React from "react";
import logoUneat from "../../../resources/logoUEA.png";
import { LoginGoogle } from "../../organisms";
import "./index.scss";

export const BookingHome = () => {
    return (
        <div className='MainScreenLogin'>
            <br />
            <div className='TitleOfTheMainScreen'>
                <h2 className='TextOfTheTitleOnMainScreen'>Sistema de reservas de aulas.</h2>
            </div>
            <div className='GeneralCircleOfMainScreen'>
                <div className="Circle">
                    <img src={logoUneat} className="ImgLogoMovil"></img>
                    <div className="btnEnter">
                        <LoginGoogle />
                    </div>
                </div>
            </div>
        </div>
    );
};