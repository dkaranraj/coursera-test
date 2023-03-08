import React from 'react'
import './Highlights.css'
import image1 from '../../assets/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0'
import image2 from '../../assets/9beeddcd9d22dc711cd9fddc4a3393a7278299c7'
import image3 from '../../assets/957db75e6b654e07f65da12b96dc858c5995ed28'
import vImage2 from '../../assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff'

const items = [
  {
    title: 'Greek Salad',
    image: image1,
    description: 'Greek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek Salad',
    price: 12.01
  },
  {
    title: 'Greek Salad 1',
    image: image2,
    description: 'Greek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek Salad',
    price: 11.01
  },
  {
    title: 'Greek Salad 2',
    image: image3,
    description: 'Greek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek SaladGreek Salad',
    price: 13.21
  },
]

const renderItem = (item) => {
  return <div key={item.title} className="highlight-item">
    <div><img src={item.image} alt="" /></div>
    <div className='content'>
      <div>
        <h3>{item.title}</h3>
        <span>{item.price}$</span>
      </div>
      <p>{item.description}</p>
    </div>
  </div>
}

function Highlights() {
  return (
    <div className='highlights-wrapper'>
      {items.map(renderItem)}
    </div>
  )
}

export default Highlights