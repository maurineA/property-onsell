import React, { useState, useEffect } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://bot-api-7sh5.onrender.com/rooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => setData(jsonData))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>Data from JSON Server</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            {item.image && <img src={item.image} alt={item.name} style={{ maxWidth: '500', maxHeight: '500px' }} />}
           <strong>Description:</strong> {item.Beds} <br />
            <strong>Address:</strong> {item.address} <br />
            <strong>Status:</strong> {item.Status} <br />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
