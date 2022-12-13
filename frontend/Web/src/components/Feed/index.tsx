import { Chat, Heart, UserCircle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Text from '../Text'
import api from '../../services/api'


interface Post {
  _id: string,
  title: string,
  description: string,
  image: string,
  userId : string
  profile: string
  comments: [],
  likes: []
}


export default function Feed() {
  const token = localStorage.getItem("accessToken")
  const profile = localStorage.getItem("profile")
  const user = localStorage.getItem("user")
  const [posts, setPosts] = useState<Post[]> ( [] );
  const authHeader = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}

  useEffect(() => {
    async function getPosts(){
      const response = await api.get("/feed", authHeader);
      setPosts(response.data)
    }
    getPosts()
  }, []);
 

  async function handleLike(postId: String) {
    try {
      await api.post(`/posts/${postId}/like`, { userId: profile }, authHeader);
     
    } catch (err: any) {
      console.error(err.response.data);
    }
  }

  console.log(posts);
 
  return (
    <div className="basis-5/6 overflow-y-auto scroll-smooth">
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="font-extrabold ml-5">
          Página inicial
        </Text>
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">{user}</Text>
        </div>
      </Heading>
      
      { posts && posts.map((post: Post) => (       
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
                        <div className="ml-16 flex flex-col gap-2">
                            <img  src={post.image} width={500} alt="imagem do post" />
                        </div>                        
                        <div className="flex items-center ml-16 my-4 space-x-2">
                            <Chat size={24} className="text-slate-50" />
                            <Text size="sm">{post.comments.length}</Text>
                            
                            <div className="hover:bg-red-600 rounded-full p-1" onClick={() => handleLike(post._id)}>
                                <Heart size={24} className="text-slate-50" />
                            </div>                    
                            <Text size="sm">{post.likes.length}</Text>
                        </div>
                    </div>
                ))}
    </div>
  );
}
