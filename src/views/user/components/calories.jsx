import { Link } from "react-router-dom"

export default function Calories ({ calories }) {
  return (
    <div className="flex flex-col gap-10 items-center border-2 border-[#324baa] p-5 rounded-2xl text-[#324BAA]">
      <div className="flex w-full justify-around">
        <div className="w-28 h-28 flex flex-col justify-center items-center text-center border-[#324baa]">
          <p>1.291</p>
          <p>Consumed</p>
        </div>

        <div className="w-28 h-28 flex flex-col rounded-full border-2 justify-center items-center text-center border-dashed border-[#324baa]">
          <p>{calories}</p>
          <p>Remaing</p>
        </div>

        <div className="w-28 h-28 flex flex-col justify-center items-center text-center border-[#324baa]">
          <p>244</p>
          <p>Burned</p>
        </div>
      </div>


      <div className="flex gap-10">
        <p>Breakfast: 200kcal</p>
        <p>Lunch: 200kcal</p>
        <p>Dinner: 200kcal</p>
        <p>Snacks: 200kcal</p>
      </div>

      <Link to={'/diary'}>Changes calories</Link>
    </div>
  )
}