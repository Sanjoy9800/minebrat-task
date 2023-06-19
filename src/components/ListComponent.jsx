// ListComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CitiesListComponent from './CitiesListComponent';

const ListComponent = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = () => {
    axios
      .get('http://api.minebrat.com/api/v1/states')
      .then((response) => {
        setStates(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCities = () => {
    if (selectedState) {
      axios.get(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then((response) => {
          setCities(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCities([]);
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCities();
    navigate(`/result/${selectedState}`, { state: selectedState, cities: cities });
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>
      <CitiesListComponent cities={cities} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ListComponent;
