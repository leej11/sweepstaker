import Country from "./components/Country";
import Entrant from "./components/Entrant";
import RandomButton from "./components/RandomButton";
import { useEffect, useState } from "react";
import "./app.css";
import {
  CurrentSelection,
  SelectedCountries,
} from "./components/DisplaySelections";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // I basically want to create a context that contains users
  // and countries.
  // Then a function for when the button is clicked, it fires 2 dispaches
  // one to pop them from the list of possible users and countries
  // one to add them to the active/selected user and country

  return (
    <div className="app">
      <Navbar />
      <CurrentSelection />
      <RandomButton />

      <div className="container">
        <div className="item">
          <Country />
        </div>
        <div className="item">
          <Entrant />
        </div>
        <div className="item bg-color-1">
          <SelectedCountries />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
