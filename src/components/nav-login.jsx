import { BiUser } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

import Logo from "../assets/logo-2.png"


export default function NavLogin () {
  const { user, isLoading } = useUser()

  return (
    <div className="flex justify-between pt-5 px-5 text-white">
      <img src={Logo} alt="Logo de Danone" className='md:w-auto md:h-20 h-12' />
    {
      isLoading ?
      <div>
        <BiUser className="text-xl" />
        <p>Login</p> 
      </div>
      :
        <div className="flex items-center gap-2">
          <NavLink to={'/user'} className={'texl-lg'}>{user.fields.username}</NavLink>
          <img src={`https:${user.fields.profilePicture.fields.file.url}`} alt={user.fields.username} className="w-10 h-10 rounded-full" />
        </div>
    }
    </div>
  )
}