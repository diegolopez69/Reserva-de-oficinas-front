import React, { useEffect, useState } from "react";
import axios from "axios";
import { BookingGreen, BookingRed } from "../../organisms";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";

export const Availability = () => {
  const [stateOfBooking, setStateOfBooking] = useState(0)
  async function fetchData() {
    const { data } = await axios.get("http://172.20.10.3:3000/links/1/Fri&Dec&17&2021/Fri&Dec&17&2021&24:00")
    console.log(data)
    if (data.disponibilidad[0] != null) {
      setStateOfBooking(1)
    } else {
      setStateOfBooking(0)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2 - Aula 2.1
          </h1>
        </div>
      </div>
      {
        stateOfBooking === 1 ? <BookingRed /> : <BookingGreen />
      }
    </div>
  );
};


