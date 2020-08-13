import React, { useContext } from "react";
import { CountryContext } from "../context/countryContext";
import { useFetchCountries } from "../hooks/useFetchCountries";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const CountrySearcher = () => {
  const { setCountry } = useContext(CountryContext);
  const { countries, isLoading, error } = useFetchCountries();

  const options = countries.map((country, index) => (
    <MenuItem style={{ paddingLeft: 10 }} key={index} value={country}>
      {country}
    </MenuItem>
  ));

  const handler = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Select
      name="country"
      defaultValue="Chile"
      onChange={handler}
      id="country"
      style={{ width: 300, textAlignLast: "center", fontSize: 24 }}
    >
      {options}
      {isLoading ? <MenuItem>Cargando...</MenuItem> : null}
    </Select>
  );
};

export default CountrySearcher;
