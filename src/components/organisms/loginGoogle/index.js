import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import "./index.scss";

export const LoginGoogle = () => {

  const history = useHistory();

  const responseGoogle= (respuesta)=>{
    
    console.log(respuesta.profileObj);
    // console.log("Nombre",respuesta.profileObj.givenName);
    
    if(respuesta.profileObj){
      localStorage.setItem("familyName", respuesta.profileObj.familyName);
      localStorage.setItem("email", respuesta.profileObj.email);
      localStorage.setItem("name", respuesta.profileObj.name);
      history.push("/bookingMovil")
    }else{
      alert("No hubo exito al autenticar")
    }
  }

  return (
    <div className='GeneralLoginGoogle'>
      <GoogleLogin
        //clientId="520772330148-utrgvgn8o7tp8bicpedtg3d001rg10h6.apps.googleusercontent.com"
        clientId="243814162290-6rcq1cja7gpjn789odsad8qg0qgialoi.apps.googleusercontent.com" //Client ID de biblioteca

        buttonText="Iniciar sesión"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="BtnLoginGoogle"
      />
      
    </div>
  );
};