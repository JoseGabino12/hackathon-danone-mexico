import CardProduct from "../../products/components/card-product";

export default function Results ({ results }) {
  return (
    <div className="border-2 p-5">
      <div className='bg-[#e8f3ff] p-2 rounded-lg my-2 self-start w-full'>
        <p className='text-[#324BAA] font-bold'>Your products of interest in terms of ecological footprint</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {
          results.map(result => (
            <CardProduct
              key={result.sys.id}
              id={result.sys.id}
              name={result.fields.name}
              image={`https:${result.fields.image.fields.file.url}`}
              calories={result.fields.energeticValue}
              h="64"
              search={true}
            />
          ))
        }
      </div>
    </div>
  )
}