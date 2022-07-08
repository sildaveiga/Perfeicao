import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  email: undefined,
  country: undefined,
  img: [],
  city: undefined,
  phone: undefined,
};

export const RegisterContext = createContext(INITIAL_STATE);

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        user: null,
        email: null,
        password: null,
        country: null,
        img: null,
        city: null,
        phone: null,
      };
    case "REGISTER_SUCCESS":
      return {
        user: action.payload,
        email: action.payload,
        password: action.payload,
        country: action.payload,
        img: action.payload,
        city: action.payload,
        phone: action.payload,
      };
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <RegisterContext.Provider
      value={{
        user: state.user,
        email: state.email,
        password: state.password,
        country: state.country,
        img: state.img,
        city: state.city,
        phone: state.phone,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
