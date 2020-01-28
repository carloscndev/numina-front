// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const InputEmail = ({ placeholder, label, errorText }) => (
  <div className='input'>
    <label>{label}</label>
    <input
      placeholder={placeholder}
    />
    <div className='error'>{errorText}</div>
  </div>
)

export default InputEmail
