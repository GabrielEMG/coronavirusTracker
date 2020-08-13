import React, { useState, useEffect, useContext } from "react";
import { CountryContext } from "../context/countryContext";

export const useFetchData = () => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { country } = useContext(CountryContext);
  useEffect(() => {
    setIsLoading(true);
    fetchCountryData(country, setCountryData, setIsLoading);
  }, [country]);
  return {
    countryData: countryData,
    country: country,
    isLoading: isLoading,
  };
};

const fetchCountryData = async (country, setCountryData, setIsLoading) => {
  let date = new Date(2020, 0, 1);
  let data = [];
  while (date.getTime() <= new Date().getTime()) {
    let dataFetched = fetchData(date, country);
    data.push(dataFetched);
    date.setDate(date.getDate() + 4);
  }
  let promisedData = await Promise.all(data);
  setCountryData(promisedData);
  setIsLoading(false);
};

const fetchData = async (date, country) => {
  let data = await fetch(
    `https://covid-193.p.rapidapi.com/history?day=${date
      .toISOString()
      .substring(0, 10)}&country=${country}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c",
      },
    }
  );
  data = await data.json();
  return data.response;
};
