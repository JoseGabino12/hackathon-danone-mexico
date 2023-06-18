import { NavLink } from "react-router-dom"
import NavLogin from "./nav-login"

export default function Nav () {
  return (
    <nav className="bg-gradient-to-b from-[#324baa] to-[#4cabe4]">
      <NavLogin />

      <div className="p-3 flex justify-center items-center text-white font-bold">
        <ul className="flex gap-5">
          <li>
            <NavLink 
              to={'/'} 
              className={({isActive}) => { 
                return isActive ? 'backdrop-blur-md bg-white/30 p-2 rounded-md' : 'hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/products'}
              className={({isActive}) => { 
                return isActive ? 'backdrop-blur-md bg-white/30 p-2 rounded-md' : 'hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/diary'}
              className={({isActive}) => { 
                return isActive ? 'backdrop-blur-md bg-white/30 p-2 rounded-md' : 'hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'
              }}
            >
              Diary
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/contact'}
              className={({isActive}) => { 
                return isActive ? 'backdrop-blur-md bg-white/30 p-2 rounded-md' : 'hover:backdrop-blur-md hover:bg-white/30 p-2 hover:cursor-pointer rounded-md'
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}