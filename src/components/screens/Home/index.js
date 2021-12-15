import React from "react";
import { CircleMiddle, Navbar } from "../../organisms";
import { CardList } from "../../molecules";
import "./index.scss";

export const Home = () => {
  return (
      <div id="home">        
        <Navbar/>
        <CircleMiddle />
        <CardList />
      </div>
  );
};
