// CitiesListComponent.js
import React from 'react';

const CitiesListComponent = ({ cities }) => {
  return (
    <div>
      <select>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitiesListComponent;
