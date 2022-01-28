import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import "./index.scss";

export const LoginGoogle = () => {

  const history = useHistory();

  const respuestaGoogle= (respuesta)=>{
    console.log(respuesta.profileObj);
    console.log(respuesta.profileObj.givenName);
    if(respuesta.profileObj){
      history.push("/bookingMovil")
    }else{
      alert("No hubo exito al autenticar")
    }
  }

  return (
    <div className='GeneralLoginGoogle'>
      <GoogleLogin
        clientId="863935160309-4k6lemam2m722m32e0vaeq4q5c5c7upk.apps.googleusercontent.com"
        buttonText="Iniciar sesión"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
        className="BtnLoginGoogle"
      />
      
    </div>
  );
};