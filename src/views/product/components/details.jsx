import Nutritional from "./nutritional"

export default function Details ({ ingredients, details, nutritional }) {
  return (
    <div className="flex flex-col gap-10 text-[#324baa]">
      <div>
        <h2 className="text-2xl font-semibold my-2">Ingredients</h2>
        <p>{ingredients}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold my-2">Products details</h2>
        { details.map(detail => <p key={detail} className="my-2">{detail}</p>) }
      </div>

      <Nutritional nutritional={nutritional} />
    </div>
  )
}