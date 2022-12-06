import React from 'react'
import logo_menu from '../../assets/logo_menu.svg'
import Text from '../../components/Text'
import * as Dialog from '@radix-ui/react-dialog'
import Menu from '../../components/Menu'
import CreatePostButton from '../../components/CreatePostButton'
import CreatePostDialog from '../../components/CreatePostDialog'

export default function Home() {
  return (
    <div className='w-screen h-screen flex '>
        <div className='basis-1/6 border-r border-slate-400 ml-4 pt-4'>
            <div className='flex items-center ml-4'>
                <img src={logo_menu} alt="Logo" />
                <Text className="font-extrabold ml-4">Parrot</Text>
            </div>
            <Menu/>
            <Dialog.Root>
                <CreatePostButton/>
                <CreatePostDialog/>
            </Dialog.Root>
        </div>
        <div className='basis-5/6'></div>
    </div>
  )
}
