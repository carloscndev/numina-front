// Import Modules
import React from 'react'

// Import Componentes
import HamburguerIcon from '../../icons/HamburgerIcon'
import BellIcon from '../../icons/BellIcon'
import UserIcon from '../../icons/UserIcon'
import CloseIcon from '../../icons/CloseIcon'
import NuminaIcon from '../../../assets/numina.svg'

// Import Styles
import './styles.scss'

const Header = ({ user, isMenuVisible, setMenuVisible }) => (
  <header>
    <div className='header-container'>
      <div className='first-section'>
        <div className='numina-icon'>
          <img src={NuminaIcon} alt='Numina' />
        </div>
        {
          isMenuVisible && (
            <div className='close-icon' onClick={() => setMenuVisible(false)}>
              <CloseIcon color='#d8d8d8' width='22' height='22' />
            </div>
          )
        }
        {
          !isMenuVisible && (
            <div className='hamburger-icon' onClick={() => setMenuVisible(true)}>
              <HamburguerIcon color='#d8d8d8' width='22' height='22' />
            </div>
          )
        }
      </div>
      <div className='second-section'>
        <div className='notifications-icon'>
          <BellIcon color='#fff' />
        </div>
        {
          user && (
            <div className='user'>
              <UserIcon color='#fff' />
              <span>{user}</span>
            </div>
          )
        }
      </div>
    </div>
  </header>
)

export default Header
