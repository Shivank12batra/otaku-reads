import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth/AuthContext";
import { DataProvider } from "./context/data/DataContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
     <DataProvider>
       <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
