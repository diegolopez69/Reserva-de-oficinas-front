import { useContext } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./../firebase";

import { useApiRequest } from ".";
import { UserContext } from "../context";

const operationTypes = {
  oauth: "oauth",
  authByPassAndEmail: "authByPassAndEmail",
  signUpByPassAndEmail: "signUpByPassAndEmail",
};

const getAuthHandler = (operationType) => {
  if (operationType === operationTypes.signUpByPassAndEmail)
    return createUserWithEmailAndPassword;

  return operationType === operationTypes.oauth
    ? signInWithPopup
    : signInWithEmailAndPassword;
};

/**
 * @description
 * Hook that aims to centralize authentication logic, it returns one single function
 * that will be used to
 * 1) Create users with password and email
 * 2) authenticate users by gmail and/or facebook account
 *
 * @param function createFn(entityToCreate)
 * @returns function handleAuthentication(operationType,provider || credentials)
 * * @param String operationType, one of the existint operation types in the object above
 * * @param Provider provider, either facebook or google provider
 * * @param Array cretendials = (user_email,user_password)
 */

export const useAuthentication = () => {
  const { postRequest } = useApiRequest();
  const { setUserData } = useContext(UserContext);

  const handleAuthentication = async (type, ...provider) => {
    try {
      await setPersistence(auth, browserSessionPersistence);
    } catch (exception) {
      console.error(exception);
    }

    const handler = getAuthHandler(type);
    return handler(auth, ...provider)
      .then(({ user }) =>
        postRequest("user/auth", user)
          .then((res) => {
            setUserData(res.user);
            return res.user;
          })
          .catch((err) => {
            console.log("Error on api", err);
            throw new Error(err);
          })
      )
      .catch((err) => {
        console.log("Error from firebase: ", JSON.stringify(err));
        throw new Error(err.code);
      });
  };

  return {
    handleAuthentication,
    operationTypes,
    providers: { googleProvider, facebookProvider },
  };
};
