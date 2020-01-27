// Import Modules
import React from 'react'

// Import Componentes
import HamburguerIcon from '../../icons/HamburgerIcon'

// Import Styles
import './styles.scss'

const Header = () => (
  <header>
    <div className='header-container'>
      <div className='first-section'>
        <div>Logo</div>
        <div>
          <HamburguerIcon />
        </div>
      </div>
      <div className='second-section'>
        <div>
          Notifications
        </div>
        <div>
          User
        </div>
      </div>
    </div>
  </header>
)

export default Header
