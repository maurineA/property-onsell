import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Services />}></Route>
        <Route path='/booking form'element={<BookingForm />}></Route>
      </Routes>
    </div>
  )
}

export default App