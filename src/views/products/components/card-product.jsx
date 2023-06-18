import { Link } from 'react-router-dom'

export default function CardProduct ({id, name, image}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="flex flex-col justify-between items-center text-center p-5 gap-10 bg-white rounded-md hover:cursor-pointer hover:shadow-lg">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
        <p className="text-xl font-semibold text-[#324baa]">{name}</p>
      </div>
    </Link>
  )
}