import { useUser } from '../../../hooks/useUser'
import Buttons from './buttons'

export default function CardProduct ({
  id,
  name,
  image,
  calories,
  w = 'full',
  h = '60',
  search = false
}) {
  const { updateTotalCalories } = useUser()

  const handleAddProduct = () => {
    updateTotalCalories(calories)
  }

  return (
    <div className="flex flex-col justify-between items-center text-center p-5 gap-10 bg-white rounded-md hover:shadow-lg">
      <img src={image} alt={name} className={`w-${w} h-${h} object-cover`} />
      <p className="text-xl font-semibold text-[#324baa]">{name}</p>

      {
        search ? (
          <p className="text-xl font-semibold text-[#324baa]">{calories} kcal</p>
        ) :
          <Buttons handleAddProduct={handleAddProduct} id={id} />
      }
    </div>
  )
}