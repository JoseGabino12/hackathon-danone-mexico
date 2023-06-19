import { client } from "../lib/client"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setuser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateTotalCalories = async (totalCalories) => {
    console.log(import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)
    const url = `https://api.contentful.com/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master/entries/${user.sys.id}`
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/vnd.contentful.management.v1+json',
    }

    const updatedData = {
      fields: {
        totalCalories: {
          'en-US': totalCalories,
        },
      }
    };

    fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(updatedData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Entrada actualizada:', data);
      })
      .catch(error => {
        console.error('Error al actualizar la entrada:', error);
      });

    setuser(user)
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await client.getEntries({ content_type: 'user' })

      setuser(res.items[0])
      setIsLoading(false)
    }

    getUser()
  }, [])

  return { user, isLoading, updateTotalCalories }
}