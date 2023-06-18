import { Link } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import NavLogin from "./nav-login"

export default function Nav () {
  return (
    <nav className="bg-gradient-to-b from-[#324baa] to-[#4cabe4]">
      <NavLogin />
      <div className="p-5 flex justify-center items-center text-white font-bold">
        <ul className="flex gap-5">
          <Link to={'/'} className='hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'>
            Home
          </Link>
          <Link to={'/products'} className='hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'>
            Products
          </Link>
          <Link to={'/diary'} className='hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'>
            Diary
          </Link>
          <Link to={'/contact'} className='hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'>
            Contact
          </Link>
        </ul>

        <div className="flex justify-end">
          <BiSearch className="text-2xl" />
        </div>
      </div>
    </nav>
  )
}