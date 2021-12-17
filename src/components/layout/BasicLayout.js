import React, { Fragment } from "react";
import { Navbar } from "../organisms";
import { Footer } from "../molecules";

export const BasicLayout = (props) => (
  <Fragment>
    <Navbar />
    {props.children}
    
  </Fragment>
);
