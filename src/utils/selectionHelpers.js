// import React, { useContext } from "react";

// Helper function to get a random key from an object
export const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
};

// Helper function to get random selections from countries and entrants
export const getRandomSelections = (countries, entrants) => {
  const selectedCountryKey = getRandomKey(countries);
  const selectedEntrantKey = getRandomKey(entrants);
  return {
    selectedCountry: selectedCountryKey,
    selectedEntrant: selectedEntrantKey,
  };
};

// Helper function to get lowest seeded team, and a random entrant
export const getLowestSeededTeamRandomEntrant = (countries, entrants) => {
  let lowestSeededTeam = null;
  let maxSeed = -Infinity;

  Object.entries(countries).forEach(([country, info]) => {
    if (info.seed > maxSeed) {
      maxSeed = info.seed;
      lowestSeededTeam = country;
    }
  });

  const selectedEntrantKey = getRandomKey(entrants);

  return {
    selectedCountry: lowestSeededTeam,
    selectedEntrant: selectedEntrantKey,
  };
};
