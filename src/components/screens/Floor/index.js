import React from "react";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link } from "react-router-dom";
import "./index.scss";


export const Floor = () => {
  return (
    <div className='GeneralFloors'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitle'>
          <h1 className='HeaderTextOfScreenFloor'>
            Selecciona una planta
          </h1>
        </div>
      </div>

      <div className='BtnOfFloors'>
        <Link to="/floor">
          <Button className='BtnOfEachFloor'>
            Planta 3
          </Button>
        </Link>
        <Link to="/floorTwo">
          <Button className='BtnOfEachFloor'>
            Planta 2
          </Button>
        </Link>
        <Link to="/floor">
          <Button className='BtnOfEachFloor'>
            Planta 1
          </Button>
        </Link>
        <Link to="/floor">
          <Button className='BtnOfEachFloor'>
            Planta 0
          </Button>
        </Link>
        <Link to="/floor">
          <Button className='BtnOfEachFloor'>
            Planta -1
          </Button>
        </Link>
        <Link to="/floor">
          <Button className='BtnOfEachFloor'>
            Planta -2
          </Button>
        </Link>








      </div>

    </div>
  );
};
