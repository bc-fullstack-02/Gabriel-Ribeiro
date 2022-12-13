import React, { FormEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { TextInput } from '../TextInput'
import Button from '../Button'
import api from '../../services/api';

interface CreatePostDialogProps {
  closeDialog : () => void
}
interface PostFormElements extends HTMLFormControlsCollection{
  title: HTMLInputElement;
  description: HTMLInputElement;
}

interface PostFormElement extends HTMLFormElement{
  readonly elements: PostFormElements
}

export default function CreatePostDialog({closeDialog}: CreatePostDialogProps) {
  const token = localStorage.getItem("accessToken");
  

  async function handleSubmit(event: FormEvent<PostFormElement>){
    event.preventDefault();
    const form = event.currentTarget;
    const newPost = {
      title: form.elements.title.value ,
      description: form.elements.description.value
    };

    try {
      await api.post('/posts', newPost, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      closeDialog();
    } catch (error) {
      alert("Erro ao criar o post")
      console.log(error)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>
      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-2xl font-black'>Novo Post</Dialog.Title>
          <form className='mt-8 flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-2'>
                    <label htmlFor="description" className='font-semibold'>Título do post</label>
                    <TextInput.Input id='title' placeholder='Qual o título do post'/>
                  </div>
                <label htmlFor="description" className='font-semibold'>O que você está pensando?</label>
                <TextInput.Input id='description' placeholder='Diga o que está pensando...'/>
              {/* 
                <label htmlFor="image" className='font-semibold'>Insira uma foto</label>
                <input type="file" name="image" id="image" />
            */}

              <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Fechar</Dialog.Close>
                  <Button type="submit" className='flex-none w-48'>Postar</Button>
              </footer>
          </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
