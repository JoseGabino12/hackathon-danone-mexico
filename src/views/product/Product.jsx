import Loading from "../../components/loading"
import { useProduct } from "../../hooks/useProduct"
import { useParams } from "react-router-dom"
import PrincipalInfo from "./components/princpal-info"

export default function Product () {
  const { id } = useParams()
  const { product, isLoading } = useProduct(id)

  return (
    <main className="min-h-screen bg-[#e8f3ff] p-20">
      { 
        isLoading ? <Loading /> :(
          <div className="grid grid-cols-2">
            <PrincipalInfo
              image={`https:${product.fields.image.fields.file.url}`}
              name={product.fields.name}
              description={product.fields.description}
              nutriScore={product.fields.nutriScore}
            />
            <PrincipalInfo
              image={`https:${product.fields.image.fields.file.url}`}
              name={product.fields.name}
              description={product.fields.description}
              nutriScore={product.fields.nutriScore}
            />
          </div>
        )
      }
    </main>
  )
}