import React from "react";
import { SliderItem } from "../../molecules";
import Button from '@material-ui/core/Button';
import "./index.scss";

export const CircleMiddle = () => {
  return (
    <div className='CircleOfMiddleGeneral'>
      <br/><br/>
      <div className='TextOfTheTitleOnPrincipalScreen'>
        <h1 className='TextOfTheMainTtitle'>Sistema de reservas de salas y aulas.</h1>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className='Circle'>
        <h2>Logo</h2>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  );
};
