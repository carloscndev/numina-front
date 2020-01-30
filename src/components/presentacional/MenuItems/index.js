// Import Modules
import React from 'react'

// Import Componentes
import MenuItem from '../MenuItem'
import UserIcon from '../../icons/UserIcon'
import UsersIcon from '../../icons/UsersIcon'
import AlbumIcon from '../../icons/AlbumIcon'
import LogoutIcon from '../../icons/LogoutIcon'

const MenuItems = ({ user, doLogout }) => (
  <>
    {
      user && (
        <MenuItem text='user'>
          <UserIcon color='#fff' />
        </MenuItem>
      )
    }
    <a href='/'>
      <MenuItem text='Users'>
        <UsersIcon color='#fff' />
      </MenuItem>
    </a>
    <a href='/gallery'>
      <MenuItem text='Albums'>
        <AlbumIcon color='#fff' />
      </MenuItem>
    </a>
    <MenuItem
      text='Logout'
      clickEvent={() => { doLogout() }}
    >
      <LogoutIcon color='#fff' />
    </MenuItem>
  </>
)

export default MenuItems
