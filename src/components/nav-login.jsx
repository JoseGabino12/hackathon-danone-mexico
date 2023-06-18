import { BiUser } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../assets/logo-2.png"


export default function NavLogin () {
  return (
    <div className="flex justify-between p-3 text-white gap-2">
      <Image src={Logo} alt="Logo de Danone" width={150} height={150} />

      <div className="flex gap-2">
        <BiUser className="text-xl" />
        <Link href={'/user'} className="font-semibold text-sm">Login / Sign Up</Link>
      </div>
    </div>
  )
}