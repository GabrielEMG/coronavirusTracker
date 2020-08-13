import React, { useState, useEffect } from "react";

export const useFetchCountries = () => {
  const [countries, setCountries] = useState(["Chile"]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCountries = async () => {
    try {
      let data = await fetch("https://covid-193.p.rapidapi.com/countries", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c",
        },
      });
      data = await data.json();
      setCountries(data.response);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return {
    countries: countries,
    isLoading: isLoading,
    error: error,
  };
};
