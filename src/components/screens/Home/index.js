import React from "react";
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";
import "./index.scss";


export const Home = () => {
  return (
    <div className='MainScreenHome'> 
      <br />
      <div className='TitleOfTheMainScreen'>
        <h2 className='TextOfTheTitleOnMainScreen'>Sistema de reservas de aulas.</h2>
      </div>


      <div className='GeneralCircleOfMainScreen'>
        <h1 className="LogoOnMainScreen">Logo</h1>
        <Link to="/floor">
          <Button variant="contained" color="primary" className="BtnEntrarMainScreen">
            Entrar
          </Button>
        </Link>
      </div>
    </div>
  );
};
