import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo-2.png"


export default function NavLogin () {
  return (
    <div className="flex justify-between pt-5 px-5 text-white">
      <img src={Logo} alt="Logo de Danone" className='w-auto h-20' />

      <div className="flex gap-2">
        <BiUser className="text-xl" />
        <Link to={'/user'} className="font-semibold text-sm">Login / Sign Up</Link>
      </div>
    </div>
  )
}