import React from "react";
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";


export const Floor = () => {

  const history = useHistory();
  const RouteChange = () => {
    history.push("/floorTwo");
  }


  
  
  return (
    <div className='GeneralFloors'>



<div className='HeaderOfFloors'>
        <Link to="/">
          <Button className='BtnToGoBack'>
            <ArrowBackIosIcon className='IconToGoBack' />
          </Button>
        </Link>


        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Seleccione una planta
          </h1>
        </div>
      </div>




      <div className='BtnOfFloors'>
        
          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta 3
          </Button>

          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta 2
          </Button>

          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta 1
          </Button>

          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta 0
          </Button>

          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta -1
          </Button>

          <Button onClick={RouteChange} className='BtnOfEachFloor'>
            Planta -2
          </Button>

      </div>

    </div>
  );
};
