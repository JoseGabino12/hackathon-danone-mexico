import Loading from "../../components/loading"
import { useProduct } from "../../hooks/useProduct"
import { useParams } from "react-router-dom"
import PrincipalInfo from "./components/princpal-info"
import Details from "./components/details"
import Accordion from "./components/accordion"
export default function Product () {
  const { id } = useParams()
  const { product, isLoading } = useProduct(id)

  return (
    <main className="min-h-screen p-20">
      { 
        isLoading ? <Loading /> :(
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="grid grid-cols-2 gap-10">
              <PrincipalInfo
                image={`https:${product.fields.image.fields.file.url}`}
                name={product.fields.name}
                description={product.fields.description}
                nutriScore={product.fields.nutriScore}
              />
              <Details
                ingredients={product.fields.ingredients}
                details={product.fields.productsData}
                nutritional={product.fields.nutritionalInformation}
              />
            </div>

            <Accordion />
          </div>
        )
      }
    </main>
  )
}