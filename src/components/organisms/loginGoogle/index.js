import React from "react";
import GoogleLogin from "react-google-login";
import "./index.scss";

export const LoginGoogle = () => {

  const respuestaGoogle= (respuesta)=>{
    console.log(respuesta.profileObj);
  }

  return (
    <div className='GeneralLoginGoogle'>
      <br/>
      <GoogleLogin
        clientId="197802115801-b6f3k6chavnrppt0sdso253fv8deeacs.apps.googleusercontent.com"
        buttonText="Iniciar sesión"
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};