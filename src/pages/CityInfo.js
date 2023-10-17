import React from 'react';
import { Link } from 'react-router-dom'

const CityInfo = () => {
  const cityName = "Astana";
  const population = "1,136,009";
  const country = "Kazakhstan";
  const description = "Astana is the capital of Kazakhstan and the newest, modern and fashionable city in the country";

  return (
    <div>
      <h1>City Info {cityName}</h1>
      <p>Population: {population}</p>
      <p>Country: {country}</p>
      <p>Description: {description}</p>
      <button><Link to = "/CityImages">Next Page</Link></button>
    </div>
  );
}

export default CityInfo;
