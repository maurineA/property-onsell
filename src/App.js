
import React from 'react'
import NavBar from './components/NavBar'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
function App() {
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
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
          </Routes>
    </div>
  )
}

export default App