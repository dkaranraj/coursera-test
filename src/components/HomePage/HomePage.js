import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Highlights from './Highlights'
import './HomePage.css'
import im from '../../assets/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d'
import Testimonials from './Testimonials'

function HomePage() {
  return (
    <div className='homepage'>
      <div className='panel hero-section' id="home">
        <div className='left-panel'>
          <h1>Little Lemon</h1>
          <h3>chicago</h3>
          <p>Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <PrimaryButton>Book Table</PrimaryButton>
        </div>
        <div className='right-panel'>
          <img src={im} alt='kkk' />
        </div>
      </div>
      <div className='panel highlights-section'>
        <div>
          <PrimaryButton>Order Menu</PrimaryButton>
        </div>
        <div>
          <Highlights />
        </div>
      </div>
      <div className='panel testimonials-section'>
        <Testimonials />
      </div>
    </div>
  )
}

export default HomePage