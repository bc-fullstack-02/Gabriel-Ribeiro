import React, { useState } from 'react'
import MenuItem from '../MenuItem'
import { House, User, UsersThree } from 'phosphor-react'
import CreatePostButton from '../../components/CreatePostButton'
import CreatePostDialog from '../../components/CreatePostDialog'
import logo_menu from '../../assets/logo_menu.svg'
import Text from '../../components/Text'
import * as Dialog from '@radix-ui/react-dialog'


export default function Menu() {

    const [open, setOpen] = useState(false);
    function closeDialog(){
        setOpen(false);
    }
  return (
    <div className='basis-1/6 border-r border-slate-400 ml-4 pt-4'>
    <div className='flex items-center ml-4'>
        <img src={logo_menu} alt="Logo" />
        <Text className="font-extrabold ml-4 text-white">Parrot</Text>
    </div>
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

   <div className='flex flex-col items-center'>
   <Dialog.Root open={open} onOpenChange={setOpen}>
        <CreatePostButton/>
        <CreatePostDialog closeDialog={closeDialog}/>
    </Dialog.Root>
   </div>
</div>
  

    )
}
