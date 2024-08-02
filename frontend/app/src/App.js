// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [data, setData] = useState('');
  const [filteredResponse, setFilteredResponse] = useState(null);

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bfhl', {
        data: data.split(',').map(item => item.trim()),
      });
      setFilteredResponse(response.data);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <div className="container">
      <h1>API Interaction</h1>
      
      <div className="input-container">
        <textarea
          className="input-field"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter comma-separated values"
          rows="4"
        />
        <button className="submit-button" onClick={handlePostRequest}>
          Submit
        </button>
      </div>

      {filteredResponse && (
        <div className="response-container">
          <h2>Filtered Response</h2>
          <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
