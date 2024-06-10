import React, { useContext } from "react";
import {
  getRandomSelections,
  getLowestSeededTeamRandomEntrant,
} from "../utils/selectionHelpers";
import { DrawContext } from "../context/drawContext";
import "../styles/RandomButton.css";

function RandomButton() {
  const { dispatch, countries, entrants } = useContext(DrawContext);

  const handleClick = () => {
    // get a selection
    const { selectedCountry, selectedEntrant } =
      getLowestSeededTeamRandomEntrant(countries, entrants);
    console.log(selectedEntrant, ": ", selectedCountry);

    // dispatch it to drawContext
    dispatch({
      type: "SET_SELECTION",
      payload: {
        selectedCountry,
        selectedEntrant,
      },
    });
  };

  return (
    <div className="buttonContainer">
      <button onClick={handleClick}>Draw Team</button>
    </div>
  );
}

export default RandomButton;
