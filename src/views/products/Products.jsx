import { useState, useEffect } from "react"
import { useProducts } from "../../hooks/useProducts"

import Loading from "../../components/loading"
import CardProduct from "./components/card-product"
import Header from "./components/header"

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
            <Header handleSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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