import Loading from "../../components/loading"
import { useProducts } from "../../hooks/useProducts"
import CardProduct from "./components/card-product"

export default function Products () {
  const { products, isLoading } = useProducts()

  return (
    <div className="p-10 min-h-screen flex flex-col gap-10 bg-[#e8f3ff]">
      <h1 className="text-5xl font-semibold text-[#324baa]">Products</h1>
      {isLoading && <Loading />}
      <div className="grid grid-cols-3 gap-10">
        {
          products.map(product => (
            <CardProduct
              key={product.sys.id}
              id={product.sys.id}
              image={`https:${product.fields.image.fields.file.url}`}
              name={product.fields.name}
              calories={product.fields.energeticValue}
            />
          ))
        }
      </div>
    </div>
  )
}