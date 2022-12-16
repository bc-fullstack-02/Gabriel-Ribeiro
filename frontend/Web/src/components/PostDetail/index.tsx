import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import Menu from '../Menu';

export default function PostDetail() {
    const {postId} = useParams();
    // const [postDDetail, setPostDetail] = useState<Post>()

    useEffect(() => {
      async function fetchPostDetail(){
        try {
             const response = await api.get(`/posts/${postId}`)
           /*   setPostDetail(response.data);
             console.log(response.data) */
             
        } catch (error) {
            console.error(error)
        }
      }
    
    },[])

 
    

  return (
    <div className='w-screen h-screen flex'>
        <Menu/>   
        {/* {postDetail && <PostItem post={postdetail} />} */}
    </div>

  )
}
