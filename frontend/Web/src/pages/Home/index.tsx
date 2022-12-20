import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import Feed from '../../components/Feed'
import api from '../../services/api';
import { Post } from '../../model/Post';
import getAuthHeader from '../../services/auth';

export default function Home() {
  const authHeader = getAuthHeader();
  const profile = localStorage.getItem("profile") as string;
  
   // JSON.parse(localStorage.getItem('user') as string);
  const [posts, setPosts] = useState<Post[]> ([]);

  useEffect(() => {
    async function getPosts(){
      const response = await api.get("/feed", authHeader);
      setPosts(response.data.reverse())
    }
    getPosts()
  }, []);
 

  async function handleLike(postId: String) {
     const likedPost =  posts.filter(post => post._id === postId).map(post => post.likes.includes(profile))
     
    if (likedPost && !likedPost [0]){
      likePost(postId );
    
    }else {
      unlikePost(postId)
    }
  }

  async function likePost(postId: String) {
    try {
      await api.post(`/posts/${postId}/like`, { userId: profile }, authHeader);
      const newPost = posts.filter((post) => post._id === postId).map((post) => { post.likes.push(profile); return post;})
      
      changePostItem(newPost[0]);
    } catch (err: any) {
      console.error(err.response.data);
    }
  }

  async function unlikePost(postId: String) {
    try {
      await api.post(`/posts/${postId}/like`, { userId: profile }, authHeader);
      const newPost = posts.filter((post) => post._id === postId).map((post) => {
        const index= post.likes.indexOf(profile);
        post.likes.splice(index,1);
        return post;
      });
      changePostItem(newPost[0])
     
    } catch (err: any) {
      console.error(err.response.data);
    }
  }

  function changePostItem(newPost : Post){
    setPosts((posts) =>{
      const post = newPost
      const index = posts.indexOf(post);
      posts[index] = post;
      return [...posts];
    });
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
