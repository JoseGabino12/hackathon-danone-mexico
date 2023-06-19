import Results from "./components/results"
import CardLimit from "./components/card-limit"
import { useProducts } from "../../hooks/useProducts"
import Loading from "../../components/loading"

export default function Diary () {
  const { producstSearch, getProductsWithSearch, isLoading } = useProducts()

  return (
    <main className="min-h-screen p-5 md:p-20">
      <h1 className="font-bold text-2xl text-[#324baa] mb-5">Welcome to your diary!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardLimit getProductsWithSearch={getProductsWithSearch} />
        {
          isLoading ? <Loading /> : <Results results={producstSearch} />
        }
      </div>
    </main>
  )
}