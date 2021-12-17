import React from "react";
import { Divider } from "../../atoms";
import { Slider, Navbar } from "../../organisms";
import { CardList } from "../../molecules";
import "./index.scss";


export const Home = () => {
  return (
      <div>
        <Divider label="Noticias" />
        <Slider />
        <Divider label="Destacados" />
        <CardList />
      </div>
    
  );
};
