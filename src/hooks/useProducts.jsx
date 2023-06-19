import { useEffect, useState } from "react"
import { client } from "../lib/client"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [producstSearch, setProductsSearch] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProductsWithSearch = async (energeticValue) => {
    const newProducts = products.filter(product => product.fields.energeticValue <= energeticValue)
    setProductsSearch(newProducts)
    setIsLoading(false)
  }

  const searchProducts = async (search) => {
    const newProducts = products.filter(product => product.fields.name.toLowerCase().includes(search.toLowerCase()))
    setProductsSearch(newProducts)
    setIsLoading(false)
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await client.getEntries({ content_type: 'product' })
      setProducts(res.items)
      setIsLoading(false)
    }

    getProducts()
  }, [])
  
  return { 
    products,
    isLoading,
    getProductsWithSearch,
    producstSearch,
    searchProducts
  }
}