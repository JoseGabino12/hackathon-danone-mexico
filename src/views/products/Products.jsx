import Loading from "../../components/loading"
import CardProduct from "./components/card-product"
import { useProducts } from "../../hooks/useProducts"
import { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"

export default function Products () {
  const { products, isLoading } = useProducts()
  const [search, setSearch] = useState('')
  const [newProducts, setNewProducts] = useState([])

  const handleSearch = (e) => {
    const search = e.target.value
    setSearch(search)
  }

  useEffect(() => {
    setNewProducts(products)
  }, [products])

  useEffect(() => {
    const newProducts = products.filter(product => product.fields.name.toLowerCase().includes(search.toLowerCase()))
    setNewProducts(newProducts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])


  return (
    <div className="p-10 min-h-screen flex flex-col gap-10 bg-[#e8f3ff] text-[#324baa]">
      {
        isLoading ? <Loading />
          :
          <>
            <div className="flex justify-between">
              <h1 className="text-5xl font-semibold">Products</h1>

              <div className="bg-[#d5e8ff] rounded border border-[#324baa] flex items-center justify-between">
                <span className="py-4 px-4 bg-white rounded-l border-r border-[#324baa] disabled:opacity-50 inline-flex items-center focus:outline-none">
                  <AiOutlineSearch />
                </span>

                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                  value={search}
                  className="bg-transparent py-1 px-4 focus:outline-none w-full"
                />
              </div>

            </div>
            <div className="grid grid-cols-3 gap-10">
              {
                newProducts.length === 0 ?
                  <div className="w-full flex items-center">
                    <h2 className="text-3xl">The product does not exist...</h2>
                  </div>
                  :
                  newProducts.map(product => (
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
          </>
      }
    </div>
  )
}