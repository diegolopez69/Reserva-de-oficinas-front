import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";


export const Floor = () => {
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
