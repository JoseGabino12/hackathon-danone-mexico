import { useEffect, useState } from "react"
import { client } from "../lib/client"

export const useProduct = (id) => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getProduct = async () => {
      const res = await client.getEntries({ content_type: 'product' })
      const product = res.items.find((item) => item.sys.id === id)

      setProduct(product)
      setIsLoading(false)
    }

    getProduct()
  }, [id])

  return { product, isLoading }
}