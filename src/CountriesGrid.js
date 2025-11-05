import React, { useEffect, useState } from "react";
import "./CountriesGrid.css";

const CountriesGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.labs.crio.do/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="countries-grid">
      {countries.map((country) => (
        <div className="country-card" key={country.abbr}>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="country-flag"
          />
          <p className="country-name">{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesGrid;
