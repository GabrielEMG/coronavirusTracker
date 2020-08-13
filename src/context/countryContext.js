import React from "react";
import { createContext, useState } from "react";

let CountryContext = createContext();
let { Provider, Consumer } = CountryContext;

const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState("Chile");

  return <Provider value={{ country, setCountry }}>{children}</Provider>;
};

export { CountryProvider, Consumer as CountryConsumer, CountryContext };
