// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const MenuItem = ({ children, text }) => (
  <div className='menu-item'>
    {children}
    <span>{text}</span>
  </div>
)

export default MenuItem
