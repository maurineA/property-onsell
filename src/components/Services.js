import React, { useState, useEffect } from 'react';
import BookButton from './BookButton';
import SearchBar from './SearchBar';



const Services= () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://bot-api-7sh5.onrender.com/Rooms')
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
  
//   const BookButton = () => {
//     const handleBookClick = () => {
//       window.open('http://localhost:3000/booking%20form', '_blank'); // Replace 'your-booking-form-url' with the actual URL of your booking form
//     };
  
//     return (
//       <button onClick={handleBookClick}>Book Now</button>
//     );
//   };
  
  return (
    <div>
      <h1>Data from JSON Server</h1>
    <SearchBar/>
      <ul>
        {data.map(item => (
          
            
          
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            {item.image && <img src={item.image} alt={item.name} style={{ maxWidth: '500', maxHeight: '500px' }} />}<br/>
           <strong>Description:</strong> {item.Beds} <br />
            <strong>Address:</strong> {item.address} <br />
            <strong>Status:</strong> {item.Status} <br />
            <BookButton />
    
          </li>
        
          
        ))}
      </ul>
    </div>
  );
};

export default Services;
