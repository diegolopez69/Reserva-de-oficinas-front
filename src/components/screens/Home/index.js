import React from "react";
import Button from '@material-ui/core/Button';
import "./index.scss";


export const Home = () => {
  return (
    <div className='MainScreenHome'>
      <br/>
      <div className='TitleOfTheMainScreen'>
        <h2 className='TextOfTheTitleOnMainScreen'>Sistema de reservas de aulas.</h2>
      </div>
      <div className='GeneralCircleOfMainScreen'>
        <h1>Logo</h1>
        <Button variant="contained" color="primary">
        Entrar
      </Button>
      </div>
    </div>
  );
};
