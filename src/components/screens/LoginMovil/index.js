import React from "react";
import "./index.scss";
import logoUneat from "../../../resources/logoUEA.png";
import googleIcono from "../../../resources/googleIcono.png"


export const LoginMovil = () => {
  return (
    <div className="MainLoginMovil">
        <img src={logoUneat} className="ImgLogoMovil"></img>
        <div className="GmailLoginMovil">
            <button className="ButtonLoginMovil">
              <img src={googleIcono} className="ImgButtonLoginMovil"/>  SIGN IN WITH GOOGLE
            </button>
        </div>
    </div>
  );
};
