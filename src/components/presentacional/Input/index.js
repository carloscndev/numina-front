// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const InputEmail = ({
  placeholder,
  label,
  errorText,
  setContent
}) => (
  <div className='input'>
    <label>{label}</label>
    <input
      placeholder={placeholder}
      onChange={setContent}
    />
    <div className='error'>{errorText}</div>
  </div>
)

export default InputEmail
