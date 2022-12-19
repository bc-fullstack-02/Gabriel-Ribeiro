import React, { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Post } from '../../model/Post';
import api from '../../services/api';
import getAuthHeader from '../../services/auth';
import Menu from '../Menu';

interface CommentFormElement extends HTMLFormControlsCollection {
  user: HTMLInputElement;
  name ?: HTMLInputElement;
  password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
  readonly elements : AuthFormElements
}

export default function PostDetail() {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState<Post>();
    const [comments, setComments] = useState([]);
    const profile = localStorage.getItem("profile") as string;
    const user = localStorage.getItem("user") as string;



    useEffect(() => {
      async function fetchPostDetail(){
        try {
             const response = await api.get(`/posts/${postId}`)
             const post = response.data;
             setPostDetail(post);
            setComments(post.comments)
             
        } catch (error) {
            console.error(error)
        }
      }
    
    },[])

    async function handleLike() {
      try {
        await api.post(`posts/${postId}/`);
      } catch (error) {
        console.error(error);
      }
    }

    async function handleSubmit(event : FormEvent<CommentFormElement>) {
      event?.preventDefault();
      const form = event?.currentTarget;
      const data = {
        description : form.elements.description.value
      }

      try {
      const response =  await api.post(`posts/${postId}/comments`, data, getAuthHeader());
      const comment = response.data;
      setComments([comment, ...comments]);
      } catch (error) {
        console.error(error);
      }
    }
    

  return (
    <div className='w-screen h-screen flex'>
        <Menu newPostCreated={function (post: Post): void {
        throw new Error('Function not implemented.');
      } }/>   
        {/* {postDetail && <PostItem post={postdetail} />} */}
    </div>

  )
}
