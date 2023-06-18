export default function PrincipalInfo ({ name, image, description, nutriScore }) {
  return (
    <div className="h-full flex flex-col gap-10 justify-center items-center">
      <img
        src={image}
        alt={name}
        className="w-60 h-60 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold text-[#324baa]">{name}</h2>

      <p className="text-center">{description}</p>

      <p>Nutri-score</p>
      <div className="bg-green-400 p-5 h-14 w-14 rounded-full text-center text-white flex justify-center items-center">
        <p className="font-bold text-xl">{nutriScore}</p>
      </div>
    </div>
  )
}