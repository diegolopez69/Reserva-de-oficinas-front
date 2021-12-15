import React, { useReducer, createContext } from "react";

export const UserContext = createContext();

const LOGOUT = "LOGOUT";
const LOGGED = "LOGGED";
const LOGIN_FAILED = "LOGIN_FAILED";
const CHECK_USER_STATUS = "CHECK_USER_STATUS";

const initalState = {
  isUserLogged: false,
  token: "",
  name: "",
  id: "",
  email: "",
  lastname: "",
  loginErrors: [],
};

// const initalState = {
//   isUserLogged: true,
//   phonePrefix: "",
//   bankAccount: "",
//   zipCode: "",
//   address: "",
//   city: "",
//   language: "José Fernando Paniagua Gómez",
//   bankName: "",
//   avatar: "",
//   // lastname: "asdf",
//   password: "",
//   phone: "",
//   name: "José Fernando Paniagua Gómez",
//   avatarFullWidth: "",
//   id: "mQ0KLajzPCNIKs2Pa4E38GY1QyD3",
//   isNewEntity: false,
//   age: "",
//   email: "vic@mail.com",
//   swift: "",
// };

const userContexReducer = (state, action) => {
  switch (action.type) {
    case LOGGED: {
      return {
        isUserLogged: true,
        ...action.payload.user,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isUserLogged: false,
        loginErrors: ["Usuario o contraseña incorrectos"],
      };
    }
    default: {
      return state;
    }
  }
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userContexReducer, initalState);

  const actions = {
    logout: () => dispatch({ type: LOGOUT }),
    checkUserStatus: () => dispatch({ type: CHECK_USER_STATUS }),
    setUserData: (user) => dispatch({ type: LOGGED, payload: { user } }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;

export function withUserContext(Component) {
  return function WithUserContextComponent(props) {
    return (
      <UserContext.Consumer>
        {(user) => <Component {...props} user={user} />}
      </UserContext.Consumer>
    );
  };
}
