import React from "react";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";


export const FloorTwo = () => {
  return (
    <div className='GeneralFloors'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitle'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2
          </h1>
        </div>
      </div>

      <div className='BtnOfFloors'>
        <Button className='BtnOfEachFloor'>
          Planta 3
        </Button>
      </div>

    </div>
  );
};
