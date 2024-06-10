import React, { useContext, useEffect, useState } from "react";
import { DrawContext } from "../context/drawContext";

function CurrentSelection() {
  const { selectedCountry, selectedEntrant, countries, selectedCountries } =
    useContext(DrawContext);
  const [showEntrant, setShowEntrant] = useState(false);
  const [dots, setDots] = useState("");
  const flagSrc = selectedCountry ? `/flags/${selectedCountry}.png` : null;

  useEffect(() => {
    if (selectedCountry) {
      console.log("Selected Country:", selectedCountry);
      console.log("Countries:", countries);
      console.log("Selected Countries:", selectedCountries);
      setShowEntrant(false); // Reset the entrant display state
      setDots(" "); // Reset dots

      const dotInterval = setInterval(() => {
        setDots((prev) => (prev.length < 4 ? prev + "." : ""));
      }, 1000); // Update dots every second

      const timer = setTimeout(() => {
        setShowEntrant(true);
        clearInterval(dotInterval); // Stop the dot interval when timer is done
      }, 4000); // Set a 3-second timer

      return () => {
        clearTimeout(timer); // Clean up the timer on unmount or country change
        clearInterval(dotInterval); // Clean up the interval on unmount or country change
      };
    }
  }, [selectedCountry]);

  return (
    <div className="currentSelection">
      <div className="currentSelectionFlag">
        {selectedCountry && (
          <div className="currentSelectionFlag">
            <img
              src={flagSrc}
              alt={`Flag of ${selectedCountry}`}
              // style={{ width: "50px", height: "auto", marginRight: "10px" }}
            />
            <p>World Ranking: {selectedCountries[selectedCountry].seed}</p>
            <h1>
              {selectedCountry} goes to {!showEntrant ? dots : <br />}
            </h1>
            {showEntrant && (
              <h1 className="selectedEntrant">🎉 {selectedEntrant} 🎉</h1>
            )}
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

// Utility function to chunk an array into smaller arrays of a specified size
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const reverseLookup = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
};

function Groups() {
  const { groupsInfo, draw, selectedCountry } = useContext(DrawContext);

  const groupKeys = Object.keys(groupsInfo);
  const chunkedGroupKeys = chunkArray(groupKeys, 3); // Chunk into groups of 3

  return (
    <div>
      {chunkedGroupKeys.map((chunk, index) => (
        <div key={index} className="groupsContainer">
          {chunk.map((groupKey) => (
            <div key={groupKey} className="item">
              <h2>Group {groupKey}</h2>
              {groupsInfo[groupKey].map((country) => (
                <div key={country} className="groupContent">
                  <div className="groupContentFlag">
                    <img
                      src={`/flags/${country}.png`}
                      alt={`Flag of ${country}`}
                    />
                  </div>
                  <div key={country} className="groupContentDetails">
                    {country} -
                    {draw && country === selectedCountry ? (
                      <b> {reverseLookup(draw, country)}</b>
                    ) : (
                      reverseLookup(draw, country)
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export { SelectedCountries, CurrentSelection, Groups };
