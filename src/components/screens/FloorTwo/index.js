import React from "react";
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";


export const FloorTwo = () => {

  const history = useHistory();

  const RouteChange = () => {


    history.push("/floorTwoClass");
  }



  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <Link to="/Floor">
          <Button className='BtnToGoBack'>
            <ArrowBackIosIcon className='IconToGoBack' />
          </Button>
        </Link>
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2
          </h1>
        </div>
      </div>

      <div className='GeneralOfBtnOnFloorTwo'>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.1
        </Button>

        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.2
        </Button>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.3
        </Button>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.4
        </Button>
      </div>


      <div className='GeneralOfBtnOnFloorTwo'>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.5
        </Button>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.6
        </Button>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.7
        </Button>
        <Button onClick={RouteChange} className='EachBtwOnFloorTwo'>
          2.8
        </Button>
      </div>

    </div>
  );
};
