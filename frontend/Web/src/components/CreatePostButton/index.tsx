import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export default function CreatePostButton() {
  return (
    <Dialog.Trigger className='py-3 px-4 mt-6 bg-sky-500 transition-colors hover:bg-cyan-300 container rounded-full'>Novo Post</Dialog.Trigger>
  )
}
