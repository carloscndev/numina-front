// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const Modal = ({ children }) => (
  <div className='modal-container'>
    <div className='modal-content'>
      {children}
    </div>
  </div>
)

export default Modal
