import React from "react";
import { useNavigate } from "react-router-dom";

const BookButton = () => {
const navigate = useNavigate()
    const handleBookClick = () => {
    navigate("/booking form")
    };
  
    return (
      <button onClick={handleBookClick}>Book Now</button>
    );
  };

  export default BookButton