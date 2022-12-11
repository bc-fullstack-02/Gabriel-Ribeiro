import { Chat, Heart, UserCircle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Text from '../Text'
import api from '../../services/api'

export default function Feed() {
 const token = localStorage.getItem("accessToken")
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function getPosts(){
      const response = await api.get("/feed", {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data)
    }
    getPosts()
  });

  console.log(posts);
  return (
    <div>
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="font-extrabold ml-5">
          Página inicial
        </Text>
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">Naruto-kun</Text>
        </div>
      </Heading>
      <section>
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">Naruto-kun</Text>
        </div>
        <Text asChild className="ml-16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            assumenda sint, asperiores a eaque ad nostrum reprehenderit tempore
            minus blanditiis! Fugiat quam architecto quidem excepturi eius vero
            magnam. Magni rem minima sapiente sed porro ipsam nam veritatis
            provident maiores iure asperiores, odio iste placeat quia labore
            quam, consequuntur eum illo.
          </p>
        </Text>
        <div className="flex items-center ml-16 my-4">
          <Chat size={24} className="text-slate-50" />
          <Text size="sm">9.999</Text>

          <div className="hover:bg-sky-400 rounded-full p-1">
            <Heart size={24} className="text-slate-50" />
          </div>

          <Text size="sm">9.999</Text>
        </div>
      </section>
    </div>
  );
}
