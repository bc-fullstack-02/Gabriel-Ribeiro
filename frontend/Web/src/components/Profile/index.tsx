import { UserCircle } from 'phosphor-react'
import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../model/User'
import api from '../../services/api'
import getAuthHeader from '../../services/auth'
import AltButton from '../AltButton'
import Button from '../Button'
import Heading from '../Heading'
import Text from '../Text'
import { TextInput } from '../TextInput'

 interface Auth {
  username?: string;
  email?: string;
  password?: string;
}
interface RegisterFormElements extends HTMLFormControlsCollection{
  user?: HTMLInputElement;
  password?: HTMLInputElement;
  email?: HTMLInputElement;
}

interface RegisterFormElement extends HTMLFormElement{
  readonly elements: RegisterFormElements
}

export default function Profile() {
  const [profiles, setProfiles] = useState<User[]> ([]);
  const user = localStorage.getItem("user") as string;
  const profileID = localStorage.getItem("profile");
  const navigate = useNavigate();
  const [editVisible, seteditVisible] = useState(false)

    function handleLogout(){
      localStorage.clear();
      navigate("/");
    }

    async function handleEditUser(body: Auth) {
      try {
        const res = await api.put("/users/me", body, getAuthHeader());
        alert(res.data);
      } catch (error) {
        console.error(error);
        alert(error)
      }
    }
    async function handleSubmit(event: FormEvent<RegisterFormElement>) {
      try {
        event?.preventDefault();
        const form = event.currentTarget;
        const editForm = {
          id: profileID,
          username: form.elements.user?.value,
          email: form.elements.email?.value,
          password: form.elements.password?.value,
        };

        if (editForm.email?.length == 0) {
          delete editForm.email;
        }
        if (editForm.password?.length == 0) {
          delete editForm.password;
        }
        if (editForm.username?.length == 0) {
          delete editForm.username;
          
        } else {
            const teste = editForm.username as string
            localStorage.setItem("user", teste) ;
        }
   
        handleEditUser(editForm);
      } catch (error) {
        console.error(error);
        alert("Erro ao editar o seu usuário.");
      }
    }

    function handleVisibility() {
      if (!editVisible) {
        seteditVisible(true);
      } else {
        seteditVisible(false);
      }
    }
    useEffect(() => {
      const getProfile = async () => {
        try {
          const response = await api.get(`/profiles/${user}`, getAuthHeader());
          console.log(response);
          const profiles = response.data.map((profile: User) => {
            return { ...profile };
          });

          setProfiles(profiles);
        } catch (error) {
          console.error(error);
        }
      };
      getProfile();
    }, []);

  return (
    <div className='basis-5/6'>
         <Heading className="border-b border-slate-400 mt-4">
        <div className="flex flex-row items-center ml-5 my-2">
          <UserCircle size={48} weight="light" className="text-slate-50" />
          <Text className="font-extrabold ml-2">{user}</Text>
        </div>
      </Heading>
      {profiles.map((profile) => ( 
            <div className='flex flex-col gap-2 pl-4' key={profile._id}>
              <Text className="font-extrabold  mt-3">Seguindo : {profile.following.length} usuário(s)</Text>
              <Text className="font-extrabold ">Seguidores : {profile.followers.length} usuário(s)</Text>

              {editVisible == true && 
                <form className="mt-10 flex flex-col gap-4  items-stretch w-full max-w-sm" onSubmit={handleSubmit} >
                <label htmlFor="user" className="flex flex-col gap-2">
                    <Text>Username</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                        </TextInput.Icon>
                        <TextInput.Input id="user" type="text" placeholder={profile.username}/>
                    </TextInput.Root>
                </label>
                <label htmlFor="email" className="flex flex-col gap-2">
                    <Text>E-mail</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                        </TextInput.Icon>
                        <TextInput.Input id="email" type="email" placeholder={profile.email}/>
                    </TextInput.Root>
                </label>
                <label htmlFor="password" className="flex flex-col gap-2">
                    <Text>Senha</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                        </TextInput.Icon>
                        <TextInput.Input id="password" type="password" placeholder="*********"/>
                    </TextInput.Root>
                </label>
                <button type ="submit" className="mt-4  bg-slate-700 rounded font-semibold text-black text-sm w-32 h-7 transition-colors hover:bg-slate-500 focus:ring-2 mb-10">Confirmar </button>
            </form>
            }
            </div>
            ))}

      <div className='mt-4 w-full flex flex-row items-stretch'>
        <AltButton className='ml-4 max-w-sm' onClick={handleVisibility} >Editar usuário</AltButton>
        <Button className='ml-4 max-w-sm' onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  )
}
