import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

export default function Footer () {
  return (
    <footer className="bg-gradient-to-b from-[#4cabe4] to-[#324baa] p-10">
      <div className="flex justify-center gap-5">
        <BsTwitter className="text-2xl text-white" />
        <BsFacebook className="text-2xl text-white" />
        <BsInstagram className="text-2xl text-white" />
      </div>
    </footer>
  )
}