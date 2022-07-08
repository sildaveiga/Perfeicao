import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { RegisterContext } from "./context/RegisterContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        {/* <RegisterContext></RegisterContext> */}
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
