
// ResultComponent.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ResultComponent = () => {
  const { selectedState } = useParams();
  const location = useLocation();
  const { cities } = location.state;

  return (
    <div>
      <h1>You have selected {selectedState}</h1>
      <h2>List of Cities:</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultComponent;
