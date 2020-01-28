// Import Modules
import React from 'react'

// Import Components

import MenuItems from '../../presentacional/MenuItems'

// Import Styles
import './styles.scss'

const Menu = ({ user }) => (
  <>
    <div className='menu'>
      <MenuItems />
    </div>
    <div className='menu-background' />
  </>
)

export default Menu
