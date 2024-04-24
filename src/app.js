import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; // Import CSS file for styling

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <div key={country.cca3} className="country-item">
          <img src={country.flags.svg} alt={country.name.common} />
          <span>{country.name.common}</span>
        </div>
      ))}
    </div>
  );
};

export default Countries;
