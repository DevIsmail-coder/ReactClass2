import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBarmain'>
        <Link to= "/" >Home Page</Link>
        <Link to= "/LoginPage">Login Now</Link>
        <Link to= "/SignupPage">Signup Now</Link>
        <Link to= "/LandingPage">Landing View</Link>
    </nav>
  )
}

export default NavBar