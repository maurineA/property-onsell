import React from 'react'
import NavBar from './components/NavBar'
import { Route ,Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
function App() {
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