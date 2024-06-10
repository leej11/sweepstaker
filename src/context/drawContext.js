import { createContext, useReducer } from "react";
import countriesData from "../data/countries.json";
import entrantsData from "../data/entrants.json";
import groupsData from "../data/groups.json";

export const DrawContext = createContext();

// Utility function to move a key-value pair from one object to another
const moveKeyValue = (fromObj, toObj, key) => {
  const updatedFromObj = { ...fromObj };
  const updatedToObj = { ...toObj, [key]: fromObj[key] };
  delete updatedFromObj[key];
  return { updatedFromObj, updatedToObj };
};

export const drawReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTION":
      const { selectedCountry, selectedEntrant } = action.payload;

      console.log("Payload:", action.payload);

      const {
        updatedFromObj: updatedCountries,
        updatedToObj: updatedSelectedCountries,
      } = moveKeyValue(
        state.countries,
        state.selectedCountries,
        selectedCountry
      );

      const {
        updatedFromObj: updatedEntrants,
        updatedToObj: updatedSelectedEntrants,
      } = moveKeyValue(state.entrants, state.selectedEntrants, selectedEntrant);

      return {
        ...state,
        countries: updatedCountries,
        entrants: updatedEntrants,
        selectedCountry: selectedCountry,
        selectedEntrant: selectedEntrant,
        selectedCountries: updatedSelectedCountries,
        selectedEntrants: updatedSelectedEntrants,
        draw: { ...state.draw, [selectedEntrant]: selectedCountry },
      };
    default:
      return state;
  }
};

export const DrawContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drawReducer, {
    countries: countriesData,
    entrants: entrantsData,
    selectedCountry: null,
    selectedEntrant: null,
    selectedCountries: [],
    selectedEntrants: [],
    groupsInfo: groupsData,
    draw: {},
  });

  return (
    <DrawContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DrawContext.Provider>
  );
};

export default DrawContextProvider;
