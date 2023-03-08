import React from 'react'
import Nav from './Nav'
import logo from '../assets/725cbe0ca5da8536fc99c51e00d4d13628bd9745'

import '../css/Header.css'

function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logo} />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default Header