import { useEffect, useState } from "react"
import { client } from "../lib/client"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      const res = await client.getEntries({ content_type: 'product' })
      setProducts(res.items)
      setIsLoading(false)
    }

    getProducts()
  }, [])

  return { products, isLoading }
}