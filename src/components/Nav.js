import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='navigation-bar'>
      <ul>
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#menu">Menu</Link></li>
        <li><Link to="/#reservation">Reservation</Link></li>
        <li><Link to="/#order">Order Online</Link></li>
        <li><Link to="/#Login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Nav