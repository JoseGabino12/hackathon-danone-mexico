export default function PrincipalInfo ({ name, image, description, nutriScore }) {
  const nutriScoreColors = {
    A: 'bg-green-600',
    B: 'bg-green-400',
    C: 'bg-yellow-400',
    D: 'bg-red-400',
    E: 'bg-red-400'
  }

  return (
    <div className="h-full flex flex-col items-center gap-10 text-[#324baa]">
      <img
        src={image}
        alt={name}
        className="w-auto h-80 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold text-[#324baa]">{name}</h2>

      <div className="flex flex-col md:flex-row gap-10">
        <p className="text-center w-80">{description}</p>

        <div className="flex flex-col justify-center items-center gap-3">
          <p>Nutri-score</p>
          <div className={`${nutriScoreColors[nutriScore]} p-5 h-14 w-14 rounded-full text-center text-white flex justify-center items-center`}>
            <p className="font-bold text-xl">{nutriScore}</p>
          </div>
        </div>
      </div>

    </div>
  )
}