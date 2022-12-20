import { Chat, Heart, UserCircle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Text from '../Text'
import api from '../../services/api'
import getAuthHeader from '../../services/auth'
import { Post } from '../../model/Post'


interface PostItemProps {
    post : Post
    handleLike: (postId: String) => void
}

export default function PostItem({post, handleLike} : PostItemProps ) {
    const profile = localStorage.getItem("profile") as string;
  return (
    <div className="border-b border-slate-400 mt-4" key={post._id}>
    <div className="flex flex-row items-center ml-5 my-4">
        <UserCircle size={48} height="light" className="text-slate-50" />
        <Text className="font-extrabold ml-2">{post.profile}</Text>
    </div>
    <div className="ml-16 flex flex-col gap-2">
        <Heading size="sm">{post.title}</Heading>
        <Text asChild >
            <p>{post.description}</p>
        </Text>
    </div>  
    <div className="ml-16 flex flex-col gap-2 ">
        <img src={post.image} alt="imagem do post" className='rounded-lg max-w-2xl max-h-2xl'/>
    </div>                        
    <div className="flex items-center ml-16 my-4 space-x-2">
        <Chat size={24} className="text-slate-50" />
        <Text size="sm">{post.comments.length}</Text>
        
        <div className="hover:bg-red-600 rounded-full p-1" onClick={() => handleLike(post._id)}>
            {post.likes.includes(profile) ?  <Heart size={24} className="text-red-500" weight='fill' /> : <Heart size={24} className="text-slate-50" />  }
           
        </div>                    
        <Text size="sm">{post.likes.length}</Text>
    </div>
</div>
  )
}
