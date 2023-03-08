import React from 'react'
import './Testimonials.css'

import image1 from '../../assets/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0'
import image2 from '../../assets/9beeddcd9d22dc711cd9fddc4a3393a7278299c7'
import image3 from '../../assets/957db75e6b654e07f65da12b96dc858c5995ed28'

const ratings = [
  {
    name: 'user1',
    comment: 'Good',
    image: image1,
  },
  {
    name: 'user2',
    comment: 'Good',
    image: image2,
  },
  {
    name: 'user3',
    comment: 'Good',
    image: image3,
  },
]

const renderRatingItem = (item, index) => {
  return <div key={item.name + index} className='rating-item'>
    <h3>Rating</h3>
    <div>
      <img src={item.image} alt="" />
      <h4>{item.name}</h4>
    </div>
    <p>{item.comment}</p>
  </div>
}

function Testimonials() {
  return (
    <div className='testimonials-wrapper'>
      <h3>
        Testimonials
      </h3>
      <div className='ratings'>
        {ratings.map(renderRatingItem)}
      </div>
    </div>
  )
}

export default Testimonials