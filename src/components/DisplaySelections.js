import React, { useContext, useEffect } from "react";
import { DrawContext } from "../context/drawContext";

function CurrentSelection() {
  const { selectedCountry, selectedEntrant } = useContext(DrawContext);

  const flagSrc = selectedCountry ? `/flags/${selectedCountry}.png` : null;

  return (
    <div className="currentSelection">
      <div className="currentSelectionFlag">
        {selectedCountry && (
          <img
            src={flagSrc}
            alt={`Flag of ${selectedCountry}`}
            // style={{ width: "50px", height: "auto", marginRight: "10px" }}
          />
        )}
      </div>
      <div className="currentSelectionText">
        {selectedCountry && selectedEntrant && (
          <div>
            {selectedEntrant} selects {selectedCountry}!
          </div>
        )}
      </div>
    </div>
  );
}

function SelectedCountries() {
  const { selectedCountries, selectedEntrants, draw } = useContext(DrawContext);

  return (
    <div>
      <div className="selections">
        <h2>The Draw</h2>
        <ul>
          {Object.entries(draw).map(([name, country], index) => (
            <div className="draw-selection" key={index}>
              {name}: {country}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { SelectedCountries, CurrentSelection };
