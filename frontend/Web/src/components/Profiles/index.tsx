import { UserCircle } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import getAuthHeader from '../../services/auth';
import Button from '../Button';
import Heading from '../Heading';
import Text from '../Text'

export default function Profiles() {
  const user = localStorage.getItem("user")
  const profileID = localStorage.getItem("profile")
  const authHeader = getAuthHeader();
  const [profiles, setProfiles] = useState<ProfileProps[]> ([]);
 
  interface ProfileProps{
    _id: string,
    username: string,
    followers : string[]
    followButtonDisabled: boolean
  }

  useEffect(()=>{
    const getProfiles = async () =>{
        try {
           const response = await api.get('/profiles', authHeader );
           const profiles = await response.data.map((profile: { followers: (string | null)[]; }) => {
            return {
                ... profile,
                followButtonDisabled: profile.followers.includes(profileID)
            }
           })

            setProfiles(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error)
        }
    }
    getProfiles()
  }, [])

  async function handleFollow(userID: string ){
    try {
        await api.post(`/profiles/${userID}/follow`, {id:profileID}, authHeader)
    } catch (error:any) {
        console.error(error.response.data);
    }
  }

  async function handleUnfollow(userID: string ){
    try {
        await api.post(`/profiles/${userID}/follow`, {id:profileID}, authHeader)
    } catch (error:any) {
        console.error(error.response.data);
    }
  }


  return (
    <div className='basis-5/6'>
      <Heading className="border-b border-slate-400 mt-4">
        <Text size="lg" className="font-extrabold ml-5">
          Amigos
        </Text>
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">{user}</Text>
        </div>
      </Heading>
      <ul>
      {profiles.map((profile) => (
        <li className=' border-b border-slate-400 mt-4 pl-5' key={profile._id}>
         <div className="flex flex-row items-center ">
            <UserCircle size={48} height="light" className="text-slate-50" />
             <Text className="font-extrabold ml-2">{profile.username}</Text>
         </div>
         <footer className='mt-4 flex justify-start gap-4 mb-4'>
                 <Button type="submit" className='flex-none w-48' onClick={()=> handleFollow(profile._id) } disabled={profile.followButtonDisabled}>Seguir</Button>
                  <button type='button' className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 focus:ring-2 ring-white' disabled={!profile.followButtonDisabled} onClick={() => handleUnfollow(profile._id)}>Deixar de seguir</button>
        </footer>
        </li>
      ))}
    </ul>
    </div>
  );
}
