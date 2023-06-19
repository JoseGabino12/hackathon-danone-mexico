import { AiOutlinePlus } from 'react-icons/ai'
import { VscArrowRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

export default function Buttons ({handleAddProduct, id}) {
  return (
    <div className='flex gap-10'>
      <button
        className='text-2xl text-center flex justify-center items-center text-[#324baa] border-2 border-[#324baa] rounded-full h-10 w-10 hover:bg-[#324baa] hover:text-white'
        onClick={handleAddProduct}
      >
        <AiOutlinePlus />
      </button>

      <Link
        to={`/product/${id}`}
        className='text-2xl text-center flex justify-center items-center text-[#324baa] border-2 border-[#324baa] rounded-full h-10 w-10 hover:bg-[#324baa] hover:text-white'
      >
        <VscArrowRight />
      </Link>
    </div>
  )
}