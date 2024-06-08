import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DrawContextProvider from "./context/drawContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DrawContextProvider>
      <App />
    </DrawContextProvider>
  </React.StrictMode>
);
