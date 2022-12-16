import { Chat, Heart, UserCircle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Text from '../Text'
import api from '../../services/api'
import getAuthHeader from '../../services/auth'
import { Post } from '../../model/Post'
import PostItem from '../PostItem'


export default function Feed() {
  const authHeader = getAuthHeader();
  const profile = localStorage.getItem("profile")
  const user = localStorage.getItem("user")
  const [posts, setPosts] = useState<Post[]> ( [] );


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

      {posts && posts.map((post: Post) => (
          <PostItem post={post} handleLike={handleLike} />
      ))}
    </div>
  );
}
