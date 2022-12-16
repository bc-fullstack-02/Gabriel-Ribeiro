import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import Feed from '../../components/Feed'
import api from '../../services/api';
import { Post } from '../../model/Post';
import getAuthHeader from '../../services/auth';

export default function Home() {
  const authHeader = getAuthHeader();
  const profile = localStorage.getItem("profile")
  const [posts, setPosts] = useState<Post[]> ( [] );

  useEffect(() => {
    async function getPosts(){
      const response = await api.get("/feed", authHeader);
      setPosts(response.data.reverse())
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

  function newPostCreated (post: Post){
    setPosts((posts) => [post, ...posts])
  }

  return (
    <div className='w-screen h-screen flex '>
       <Menu newPostCreated={newPostCreated}/>
       <Feed posts={posts} handleLike ={handleLike}/>
    </div>
  )
}
