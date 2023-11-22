import React from 'react'
import NavBar from './components/NavBar'
import { Route ,Routes } from 'react-router-dom'

import Services from './components/Services'
import BookingForm from './BookingForm'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
          </Routes>
    </div>
  )
}

export default App;