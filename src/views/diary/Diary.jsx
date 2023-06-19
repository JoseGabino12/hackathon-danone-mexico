import Results from "./components/results"
import CardLimit from "./components/card-limit"
import { useProducts } from "../../hooks/useProducts"

export default function Diary () {
  const { producstSearch, getProductsWithSearch } = useProducts()

  return (
    <main className="min-h-screen p-20">
      <h1 className="font-bold text-2xl text-[#324baa] mb-5">Welcome to your diary!</h1>
      
      <div className="grid grid-cols-2 gap-5">
        <CardLimit getProductsWithSearch={getProductsWithSearch} />
        <Results results={producstSearch} />
      </div>
    </main>
  )
}