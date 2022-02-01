import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import "./index.scss";

export const LoginGoogle = () => {

  const history = useHistory();

  const responseGoogle= (respuesta)=>{
    
    console.log(respuesta.profileObj);
    console.log("Email", respuesta.profileObj.email);
    console.log("Nombre",respuesta.profileObj.givenName);
    
    if(respuesta.profileObj){
      localStorage.setItem("familyName", respuesta.profileObj.familyName);
      localStorage.setItem("email", respuesta.profileObj.email);
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
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="BtnLoginGoogle"
      />
      
    </div>
  );
};