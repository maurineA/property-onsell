import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <NavBar style={NavBarStyle}>
    
        <Link to="/home"style={{marginRight:"20px"}} >Home</Link>
        <Link to="/services" style={{marginRight:"20px"}}>Properties</Link>
      
      
      
    

    
    
    </NavBar>
  )
}
const NavBarStyle = {
  background: 'beige',
  padding: '20px',
  textAlign: 'left',
  
};


export default NavBar