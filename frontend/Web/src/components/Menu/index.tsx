import React from 'react'
import MenuItem from '../MenuItem'
import { House, User, UsersThree } from 'phosphor-react'

export default function Menu() {
  return (
   <ul>
        <MenuItem menutitle='Página inicial'>
            <House size={48} weight="fill"/>
        </MenuItem>
        <MenuItem menutitle='Perfil'>
            <User size={48} weight="fill"/>
        </MenuItem>
        <MenuItem menutitle='Amigos'>
            <UsersThree size={48} weight="fill"/>
        </MenuItem>
   </ul>

    )
}
