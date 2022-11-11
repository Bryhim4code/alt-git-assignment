import React from 'react'
import './button.css'

const Button = ({ clickHandler, isActive, btnText }) => {
  return (
    <button onClick={clickHandler}>{isActive ? "Get Github" : btnText}</button>
  )
}

export default Button