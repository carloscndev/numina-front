// Import Modules
import React from 'react'

// Import Components

import MenuItems from '../../presentacional/MenuItems'

// Import Styles
import './styles.scss'

const Menu = ({ user, setMenuVisible, doLogout }) => (
  <>
    <div className='menu'>
      <MenuItems user={user} doLogout={doLogout} />
    </div>
    <div
      className='menu-background'
      onClick={() => setMenuVisible(false)}
    />
  </>
)

export default Menu
