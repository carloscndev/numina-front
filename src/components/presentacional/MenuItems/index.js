// Import Modules
import React from 'react'

// Import Componentes
import MenuItem from '../MenuItem'
import UserIcon from '../../icons/UserIcon'
import UsersIcon from '../../icons/UsersIcon'
import AlbumIcon from '../../icons/AlbumIcon'
import LogoutIcon from '../../icons/LogoutIcon'

const MenuItems = ({ user }) => (
  <>
    {
      user && (
        <MenuItem text='user'>
          <UserIcon color='#fff' />
        </MenuItem>
      )
    }
    <MenuItem text='Users'>
      <UsersIcon color='#fff' />
    </MenuItem>
    <MenuItem text='Albums'>
      <AlbumIcon color='#fff' />
    </MenuItem>
    <MenuItem text='Logout'>
      <LogoutIcon color='#fff' />
    </MenuItem>
  </>
)

export default MenuItems
