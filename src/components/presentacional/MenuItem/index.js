// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const MenuItem = ({ children, text, clickEvent }) => (
  <div className='menu-item' onClick={clickEvent}>
    {children}
    <span>{text}</span>
  </div>
)

export default MenuItem
