import React from 'react'
import vimage1 from '../assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf'
import '../css/Footer.css'

const footerPanelOptions = [
  {
    title: 'Doormat Navigation',
    options: [
      {
        label: 'Home'
      },
      {
        label: 'About'
      },
      {
        label: 'Menu'
      },
      {
        label: 'Reservation'
      },
      {
        label: 'Order Online'
      },
      {
        label: 'Login'
      },
    ]
  },
  {
    title: 'Contact',
    options: [
      {
        label: 'Address',
      },
      {
        label: 'Phone Number',
      },
      {
        label: 'Email',
      }
    ]
  },
  {
    title: 'Social Media Links',
    options: [
      {
        label: 'Instagram',
      },
      {
        label: 'Facebook',
      },
      {
        label: 'Twitter',
      },
    ],
  }
]

function Footer() {
  return (
    <div className='footer'>
      <div>
        <img src={vimage1} alt='Footer food' />
      </div>
      <div>
        <div>
        {footerPanelOptions.map((_item) => {
          return <div key={_item.title}>
            <h4>{_item.title}</h4>
            <ul>
              {_item.options.map((option) => {
                return <li key={option.label}>{option.label}</li>
              })}
            </ul>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}

export default Footer