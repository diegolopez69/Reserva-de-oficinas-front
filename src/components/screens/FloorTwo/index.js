import React from "react";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";
 

export const FloorTwo = () => {
  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2
          </h1>
        </div>
      </div>

      <div className='GeneralOfBtnOnFloorTwo'>
        <Button className='EachBtwOnFloorTwo'>
          2.1
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.2
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.3
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.4
        </Button>
      </div>
      <div className='GeneralOfBtnOnFloorTwo'>
        <Button className='EachBtwOnFloorTwo'>
          2.5
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.6
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.7
        </Button>
        <Button className='EachBtwOnFloorTwo'>
          2.8
        </Button>
      </div>

    </div>
  );
};
