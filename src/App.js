import { Route ,Routes } from 'react-router-dom'
import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import AboutUs from './components/AboutUs';
import Footer from './Footer';
function App() {

  return (
    <div>
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path="/home" element={<Home />} />
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
          </Routes>
          <AboutUs />
          <Footer />
    </div>
  )
}

export default App;