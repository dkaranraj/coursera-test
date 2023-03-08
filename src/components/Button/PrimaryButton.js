import React from 'react'
import './PrimaryButton.css'

function PrimaryButton(props) {
  const {children, ...rest } = props
  return (
    <button className='primary-button' {...rest}>{children}</button>
  )
}

export default PrimaryButton