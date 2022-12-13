import { UserCircle } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import Heading from '../Heading'
import Text from '../Text'

export default function Profile() {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    function handleLogout(){
      localStorage.clear();
      navigate("/");
    }
  return (
    <div className='basis-5/6'>
         <Heading className="border-b border-slate-400 mt-4">
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">{user}</Text>
        </div>
      </Heading>
      <div className='mt-4 w-full flex flex-col items-stretch'>
        <Button className='ml-4 max-w-sm' onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}
