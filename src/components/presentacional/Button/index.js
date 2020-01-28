// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const Button = ({ children, clickEvent, isDisabled }) => (
  <button onClick={isDisabled ? null : clickEvent}>
    {children}
  </button>
)

export default Button
