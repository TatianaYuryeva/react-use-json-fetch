import { useEffect, useState } from "react";

export  default function useJsonFetch(url, opts) {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.statusText)
      } 

      const data = await response.json()  
      setData(data)
    } catch(e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return [data, isLoading, error]
}