export default function Nutritional ({ nutritional }) {
  return (
    <div className="flex flex-wrap gap-5">
      {
        nutritional.info.map((nutri, index) => (
          <div key={index} className="w-24 h-24 self-start flex flex-col rounded-full border-2 justify-center items-center text-center border-dotted bg-[#e8f3ff] border-[#324baa]">
            <p className="text-[#324baa] text-xs">{nutri.name}</p>
            <p className="text-[#324baa] text-sm">{nutri.value}</p>
          </div>
        ))
      }
    </div>
  )
}