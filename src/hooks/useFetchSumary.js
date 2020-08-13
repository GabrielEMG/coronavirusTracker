import React, { useState, useEffect, useContext } from "react";
import { CountryContext } from "../context/countryContext";

export const useFetchSummary = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { country } = useContext(CountryContext);

  useEffect(() => {
    fetchData(country, setData, setIsLoading);
  }, [country]);

  return {
    data: data,
    country: country,
    isLoading: isLoading,
  };
};

const fetchData = async (country, setData, setIsLoading) => {
  setIsLoading(true);

  let data = await fetch(
    `https://covid-193.p.rapidapi.com/statistics?country=${country}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c",
      },
    }
  );
  data = await data.json();
  setData(data.response);
  setIsLoading(false);
};
