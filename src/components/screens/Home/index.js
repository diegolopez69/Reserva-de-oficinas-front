import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import logoUneat from "../../../resources/logoUEA.png";
import "./index.scss";


export const Home = () => {

  
  const history = useHistory();
  const RouteChange = () => {
    history.push("/floor");
  }
  

  return (
    <div className='MainScreenHome'>
      <br />
      <div className='TitleOfTheMainScreen'>
        <h2 className='TextOfTheTitleOnMainScreen'>Sistema de reservas de aulas.</h2>
      </div>
      <div className='GeneralCircleOfMainScreen'>
        <div className="Circle">
          <img src={logoUneat} className="ImgLogoMovil"></img>
          <div className="btnEnter">
              <Button onClick={RouteChange} variant="contained" color="primary" className="BtnEntrarMainScreen">
                Entrar
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
